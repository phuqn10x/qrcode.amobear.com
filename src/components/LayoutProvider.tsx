'use client'
import React, { createContext, ReactNode, useContext, useEffect, useState } from 'react';

// Định nghĩa kiểu cho giá trị context
type LayoutContextType = {
  value: ReactNode;
};

// Tạo context với kiểu đã định nghĩa
const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

interface LayoutProviderProps {
  value: ReactNode;
  children: ReactNode;
}

const LayoutProvider = ({ value, children }: LayoutProviderProps) => {
  const contextValue: LayoutContextType = { value };
  // const [isChildrenRendered, setIsChildrenRendered] = useState(false);
  
  
  // useEffect(() => {
  //   // Giả định rằng children đã render sau khi effect này chạy
  //   isChildrenRendered ? setIsChildrenRendered(false) :  setIsChildrenRendered(true);
  //   console.log("test");
    
    
  // }, [children]);

  return (
    <LayoutContext.Provider value={contextValue}>
      {/* {isChildrenRendered ? (
        <p>Children have been rendered.</p>
      ) : (
        <p>Children are not rendered yet.</p>
      )} */}
      {children}
    </LayoutContext.Provider>
  );
};

export { LayoutProvider, LayoutContext };
