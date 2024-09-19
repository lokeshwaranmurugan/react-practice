import { v4 as uuidv4 } from "uuid";
import { TraverseTreeHook, TreeNode } from '../types/MainTypes';

const useTraverseTree = (): TraverseTreeHook => {
  const insertNode = (tree: TreeNode, folderId: string, item: string, isFolder: boolean): TreeNode => {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: uuidv4(),
        name: item,
        isFolder: isFolder,
        items: [],
      });
      return tree;
    }

    const latestNode = tree.items.map((obj) => insertNode(obj, folderId, item, isFolder));

    return { ...tree, items: latestNode };
  };

  return { insertNode };
};

export default useTraverseTree;
