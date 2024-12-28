import React, {createContext, PropsWithChildren, ReactNode, useCallback, useContext, useMemo, useState} from 'react';
import {Modal} from './Modal';

type ModalContextValue = {
    setModalContent: (content: ReactNode | null) => void;
}

const ModalContext = createContext<ModalContextValue | undefined>(undefined);

export function ModalProvider({children}: PropsWithChildren) {
    const [_modalContent, _setModalContent] = useState<ReactNode | null>(null);

    const setModalContent = useCallback(function (content: ReactNode) {
        _setModalContent(content);
    }, [_setModalContent]);

    const closeHandler = useCallback(function () {
        _setModalContent(null);
    }, [_setModalContent]);

    const value = useMemo(function () {
        return {setModalContent};
    }, [setModalContent]);

    return (
        <ModalContext.Provider value={value}>
            {children}
            <Modal isOpen={!!_modalContent} onClose={closeHandler}>
                {_modalContent}
            </Modal>
        </ModalContext.Provider>
    );
}

export function useModal(): ModalContextValue {
    const context = useContext(ModalContext);
    if (!context) {
        throw new Error('useModal must be used within a ModalProvider');
    }
    return context;
}
