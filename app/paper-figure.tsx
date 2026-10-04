"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

type Props = { src: string; alt: string; title: string; width: number; height: number };

export default function PaperFigure({ src, alt, title, width, height }: Props) {
  const [hovered, setHovered] = useState(false);
  const [pinned, setPinned] = useState(false);
  const closeButton = useRef<HTMLButtonElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const hoverBlocked = useRef(false);
  const open = hovered || pinned;

  function close() {
    hoverBlocked.current = true;
    setPinned(false);
    setHovered(false);
    trigger.current?.focus();
  }

  useEffect(() => {
    if (!pinned) return;
    closeButton.current?.focus();
    function onKey(event: KeyboardEvent) {
      if (event.key === "Escape") {
        hoverBlocked.current = true;
        setPinned(false);
        setHovered(false);
        trigger.current?.focus();
      }
      if (event.key === "Tab") {
        event.preventDefault();
        closeButton.current?.focus();
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [pinned]);

  return (
    <>
      <button
        ref={trigger}
        type="button"
        className="pub-thumbnail"
        aria-label={`查看论文图示：${title}`}
        aria-haspopup="dialog"
        onPointerEnter={(event) => { if (event.pointerType === "mouse" && !hoverBlocked.current) setHovered(true); }}
        onPointerLeave={() => { hoverBlocked.current = false; setHovered(false); }}
        onClick={() => setPinned(true)}
      >
        <img src={src} alt={alt} width={width} height={height} loading="lazy" decoding="async" />
      </button>
      {open && createPortal(
        <div className={`figure-preview-layer${pinned ? " is-pinned" : ""}`} onClick={pinned ? close : undefined}>
          <div className="figure-preview" role={pinned ? "dialog" : undefined} aria-modal={pinned ? true : undefined} aria-label={title} onClick={(event) => event.stopPropagation()}>
            {pinned && (
              <button ref={closeButton} type="button" className="figure-preview-close" onClick={close} aria-label="关闭图示" title="关闭图示">
                <X size={20} aria-hidden="true" />
              </button>
            )}
            <img src={src} alt={alt} />
          </div>
        </div>, document.body,
      )}
    </>
  );
}
