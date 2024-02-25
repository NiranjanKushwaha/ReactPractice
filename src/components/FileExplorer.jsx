import React, { useState } from "react";

const FileExplorer = ({ explorer }) => {
  const [isExpand, setIsExpand] = useState(false);
  if (explorer.type === "folder") {
    return (
      <>
        <div onClick={() => setIsExpand(!isExpand)}>
          {explorer.name}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-files"
            viewBox="0 0 16 16"
          >
            <path d="M13 0H6a2 2 0 0 0-2 2 2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2 2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m0 13V4a2 2 0 0 0-2-2H5a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1M3 4a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
          </svg>
        </div>
        <div
          style={{ display: isExpand ? "block" : "none", paddingLeft: "10px" }}
        >
          {explorer.child.map((fileObj) => {
            return <FileExplorer key={fileObj.name} explorer={fileObj} />;
          })}
        </div>
      </>
    );
  } else {
    return (
      <>
        <span>
          {explorer.name}{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-file"
            viewBox="0 0 16 16"
          >
            <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1" />
          </svg>
        </span>
        <br />
      </>
    );
  }
};

export default FileExplorer;
