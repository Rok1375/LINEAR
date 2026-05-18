export type PromptCategory = {
  id: string;
  name: string;
  description: string;
};

export type PromptFolder = {
  id: string;
  name: string;
  description: string;
};

export type PromptVersion = {
  id: string;
  savedAt: string;
  title: string;
  body: string;
  notes: string;
  tags: string[];
  categoryId: string;
  folderId: string;
};

export type PromptRecord = {
  id: string;
  title: string;
  body: string;
  description: string;
  notes: string;
  tags: string[];
  categoryId: string;
  folderId: string;
  variables: string[];
  isFavorite: boolean;
  createdAt: string;
  updatedAt: string;
  lastUsedAt: string | null;
  version: number;
  versionHistory: PromptVersion[];
};

export type PromptInput = {
  title: string;
  body: string;
  description: string;
  notes: string;
  tags: string[];
  categoryId: string;
  folderId: string;
};

export type PromptLibraryData = {
  prompts: PromptRecord[];
  folders: PromptFolder[];
  categories: PromptCategory[];
};

export type PromptDraft = PromptInput;

