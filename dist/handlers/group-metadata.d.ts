import type { BaileysEventEmitter } from '@whiskeysockets/baileys';
export default function groupMetadataHandler(sessionId: string, event: BaileysEventEmitter): {
    listen: () => void;
    unlisten: () => void;
};
