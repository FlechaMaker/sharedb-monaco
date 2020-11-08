/**
 * sharedb-monaco
 * ShareDB bindings for the Monaco Editor
 *
 * @name index.ts
 * @author Carl Ian Voller <carlvoller8@gmail.com>
 * @license MIT
 */
import WebSocket from 'reconnecting-websocket';
import EventEmitter from "event-emitter-es6";
import sharedb from 'sharedb/lib/client';
import { editor } from "monaco-editor";
import { ShareDBMonacoOptions } from "./types";
import Bindings from "./bindings";
declare class ShareDBMonaco extends EventEmitter {
    WS: WebSocket;
    doc: sharedb.Doc;
    bindings?: Bindings;
    /**
     * ShareDBMonaco
     * @param {ShareDBMonacoOptions} opts - Options object
     * @param {string} opts.id - ShareDB document ID
     * @param {string} opts.namespace - ShareDB document namespace
     * @param {string} opts.wsurl - URL for ShareDB Server API
     */
    constructor(opts: ShareDBMonacoOptions);
    add(monaco: editor.ICodeEditor, path: string): void;
    on(event: 'ready', callback: () => void): this;
}
export default ShareDBMonaco;