import * as React from "react";

const useScreenSize = () => {
    const [screenSize, setScreenSize] = React.useState({
      width: window.innerWidth,
      height: window.innerHeight
    });

    React.useEffect(() => {
        const handelResize = () => {
            setScreenSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        };

        window.addEventListener('resize', handelResize);

        return () => {
            window.removeEventListener('resize', handelResize);
        };
    }, []);

    return screenSize;
  };

  export default useScreenSize;