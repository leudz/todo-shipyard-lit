/* tslint:disable */
/* eslint-disable */
/**
* @returns {AppContext} 
*/
export function init_app(): AppContext;
/**
* @param {AppContext} app_ctx 
* @param {number} evt_type 
* @param {any} evt_data 
*/
export function send_event_to_rust(app_ctx: AppContext, evt_type: number, evt_data: any): void;
/**
* @param {AppContext} app_ctx 
*/
export function on_tick(app_ctx: AppContext): void;
/**
*/
export class AppContext {
  free(): void;
}

/**
* If `module_or_path` is {RequestInfo}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {RequestInfo | BufferSource | WebAssembly.Module} module_or_path
*
* @returns {Promise<any>}
*/
export default function init (module_or_path?: RequestInfo | BufferSource | WebAssembly.Module): Promise<any>;
        