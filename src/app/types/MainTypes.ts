export interface BooksApiResponse {
    id: number
    title: string
    author: string
    publication_year: number
    genre: string[]
    description: string
    cover_image: string
}

export interface CounterType {
    value: number
    isLoading: boolean
}

export interface ExplorerItem {
    id: string
    name: string
    isFolder: boolean
    items: ExplorerItem[]
}

export interface TreeNode {
    id: string
    name: string
    isFolder: boolean
    items: TreeNode[]
}
  
export interface TraverseTreeHook {
    insertNode: (tree: TreeNode, folderId: string, item: string, isFolder: boolean) => TreeNode
}

export interface FolderProps {
    explorer: ExplorerItem;
    handleDataChange: (id: string, value: string, isFolder: boolean) => void;
}
  