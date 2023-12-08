import { FC, ReactNode, createContext, useState } from "react";

interface ThemeConfig {
  headerDark: boolean;
  bodyDark: boolean;
  footerDark: boolean;
}

interface GlobalContextProps {
  theme: ThemeConfig;
  changeTheme: (themeConfig?: ThemeConfig) => void;
  videoModalVisible: boolean;
  toggleVideoModal: () => void;
  aboutVisible: boolean;
  toggleAbout: () => void;
  closeAbout: () => void;
  contactVisible: boolean;
  toggleContact: () => void;
  closeContact: () => void;
  visibleOffCanvas: boolean;
  toggleOffCanvas: () => void;
}

const GlobalContext = createContext<GlobalContextProps | undefined>(undefined);

const themeConfigDefault: ThemeConfig = {
  headerDark: false,
  bodyDark: false,
  footerDark: false,
};

interface GlobalProviderProps {
  children: ReactNode;
}

const GlobalProvider: FC<GlobalProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeConfig>(themeConfigDefault);
  const [videoModalVisible, setVideoModalVisible] = useState(false);
  const [aboutVisible, setAboutVisible] = useState(false);
  const [contactVisible, setContactVisible] = useState(false);
  const [visibleOffCanvas, setVisibleOffCanvas] = useState(false);

  const changeTheme = (themeConfig: ThemeConfig = themeConfigDefault) => {
    setTheme({
      ...themeConfig,
    });
  };

  const toggleVideoModal = () => {
    setVideoModalVisible(!videoModalVisible);
  };

  const toggleAbout = () => {
    setAboutVisible(!aboutVisible);
  };

  const closeAbout = () => {
    setAboutVisible(false);
  };

  const toggleContact = () => {
    setContactVisible(!contactVisible);
  };

  const closeContact = () => {
    setContactVisible(false);
  };

  const toggleOffCanvas = () => {
    setVisibleOffCanvas(!visibleOffCanvas);
  };

  const contextValue: GlobalContextProps = {
    theme,
    changeTheme,
    videoModalVisible,
    toggleVideoModal,
    aboutVisible,
    toggleAbout,
    closeAbout,
    contactVisible,
    toggleContact,
    closeContact,
    visibleOffCanvas,
    toggleOffCanvas,
  };

  return (
    <GlobalContext.Provider value={contextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export default GlobalContext;
export { GlobalProvider };

