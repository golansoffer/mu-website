import React, {useCallback} from 'react';
import ReactDOM from 'react-dom';
import styles from './modal.module.css';

type ModalProps = {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
}

export function Modal({isOpen, children, onClose = () => null}: ModalProps) {
    if (!isOpen) return null;

    // close on escape click:
    React.useEffect(function () {
        function handleEscape(e: KeyboardEvent) {
            if (e.key === 'Escape') {
                onClose();
            }
        }

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [onClose]);

    // handle close on content click:
    const stopPropagation = useCallback(function handleContentClick(e: React.MouseEvent<HTMLDivElement>) {
        e.stopPropagation();
    }, []);

    return ReactDOM.createPortal(
        <div
            role="dialog"
            key="application-main-modal"
            className={styles.modal_overlay}
            aria-modal="true"
            aria-labelledby="modal-title"
            aria-describedby="modal-description">
            <div
                role="document"
                className={styles.modal_content}
                onClick={stopPropagation}
            >
                {children}
            </div>
        </div>,
        document.getElementById('modal-root') as HTMLElement
    );
}
