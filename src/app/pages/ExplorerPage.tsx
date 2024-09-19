import { useState } from "react";
import Folder from "../components/Folder/Folder";
import explorer from "../data/folderData";
import useTraverseTree from "../hooks/useTraverseTree";

const ExplorerPage = () => {
    const [explorerData, setExplorerData] = useState(explorer);
    const {insertNode} = useTraverseTree();
  
    const handleDataChange = (folderId: string, item: string, isFolder: boolean) => {
        const finalTree = insertNode(explorerData, folderId, item, isFolder);
        setExplorerData(finalTree);
    }

    return (
        <Folder handleDataChange = {handleDataChange} explorer = {explorerData}/>
    );
}

export default ExplorerPage;