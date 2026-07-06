import { useState, useEffect, useCallback } from "react";
import type { WebContainer } from "@webcontainer/api";
import { TemplateFolder } from "@/modules/playground/lib/path-to-json";

interface UseWebContainerProps {
  templateData: TemplateFolder;
}

interface UseWebContaierReturn {
  serverUrl: string | null;
  isLoading: boolean;
  error: string | null;
  instance: WebContainer | null;
  writeFileSync: (path: string, content: string) => Promise<void>;
  destory: () => void;
}

export const useWebContainer = ({
  templateData,
}: UseWebContainerProps): UseWebContaierReturn => {
  const [serverUrl, setServerUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [instance, setInstance] = useState<WebContainer | null>(null);

  useEffect(() => {
    let mounted = true;
    let wc: WebContainer | null = null;

    async function initializeWebContainer() {
      // Don't run on server
      if (typeof window === "undefined") return;

      try {
        const { WebContainer } = await import("@webcontainer/api");

        wc = await WebContainer.boot();

        if (!mounted) {
          wc.teardown();
          return;
        }

        setInstance(wc);
        setIsLoading(false);
      } catch (error) {
        console.error("Failed to initialize WebContainer:", error);

        if (mounted) {
          setError(
            error instanceof Error
              ? error.message
              : "Failed to initialize WebContainer"
          );
          setIsLoading(false);
        }
      }
    }

    initializeWebContainer();

    return () => {
      mounted = false;
      wc?.teardown();
    };
  }, []);

  const writeFileSync = useCallback(
    async (path: string, content: string) => {
      if (!instance) {
        throw new Error("WebContainer instance is not available");
      }

      const parts = path.split("/");
      const folder = parts.slice(0, -1).join("/");

      if (folder) {
        await instance.fs.mkdir(folder, { recursive: true });
      }

      await instance.fs.writeFile(path, content);
    },
    [instance]
  );

  const destory = useCallback(() => {
    if (instance) {
      instance.teardown();
      setInstance(null);
      setServerUrl(null);
    }
  }, [instance]);

  return {
    serverUrl,
    isLoading,
    error,
    instance,
    writeFileSync,
    destory,
  };
};