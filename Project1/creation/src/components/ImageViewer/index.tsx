import { useEffect, useRef } from 'react';
import Viewer from 'viewerjs';

const ImageViewer: React.FC = ({ children }) => {
  const containerEle = useRef(null);

  useEffect(()=>{
    const viewer = new Viewer(containerEle.current as never as HTMLElement);
    return ()=>{
      // 表示组件将要销毁的时候执行，等价于componentWillUnMount
      viewer.destroy();
    }
  }, [children]);
  return <div ref={containerEle}>{children}</div>;
}

export default ImageViewer;
