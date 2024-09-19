import { useState, KeyboardEvent, MouseEvent } from 'react';
import { FolderProps } from '../../types/MainTypes';
import "./Folder.css";

export default function Folder({ handleDataChange = () => {}, explorer }: FolderProps) {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visibile: false,
    isFolder: false,
  });

  const expandFolder = () => {
    setExpand(!expand);
  };

  const onAddToFolder = (e: MouseEvent<HTMLButtonElement>, isFolder: boolean) => {
    setExpand(true);
    setShowInput({
      visibile: true,
      isFolder: isFolder,
    });
    e.stopPropagation();
  };

  const handleNewEntry = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && (e.target as HTMLInputElement).value) {
      handleDataChange(explorer.id, (e.target as HTMLInputElement).value, showInput.isFolder);
      setShowInput({ ...showInput, visibile: false });
    }
  };

  return (
    <div>
      {explorer.isFolder ? (
        <div className="folder" onClick={expandFolder}>
          <span>📂 {explorer.name}</span>
          <div>
            <button onClick={(e) => onAddToFolder(e, true)}>+ 📂</button>
            <button onClick={(e) => onAddToFolder(e, false)}>+ 📄</button>
          </div>
        </div>
      ) : (
        <div className="file">
          <span>📄 {explorer.name}</span>
        </div>
      )}
      <div style={{ marginLeft: 15, display: expand ? 'block' : 'none' }}>
        {showInput.visibile && (
          <div className="inputContainer">
            <span>{showInput.isFolder ? '📂' : '📄'}</span>
            <input
              className="inputContainer__input"
              onKeyDown={handleNewEntry}
              onBlur={() => setShowInput({ ...showInput, visibile: false })}
              autoFocus
            />
          </div>
        )}
        {explorer.items.map((item) => {
          return <Folder explorer={item} key={item.id} handleDataChange={handleDataChange} />;
        })}
      </div>
    </div>
  );
}
