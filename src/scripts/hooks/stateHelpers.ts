import { createLocalStorageStateHook } from "use-local-storage-state";
import { Lexema } from "interfaces/Interface";

export const useLexemasTree = createLocalStorageStateHook<Lexema>("lexemas-tree", undefined);
