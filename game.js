require('utils/ald-game.js')
require('libs/weapp-adapter/index');
var Parser = require('libs/xmldom/dom-parser');
window.DOMParser = Parser.DOMParser;
require('libs/wx-downloader.js');
require('src/settings.d13d2');
var settings = window._CCSettings;
require('main.2cd6a');
require(settings.debug ? 'cocos2d-js.js' : 'cocos2d-js-min.3cd83.js');
require('./libs/engine/index.js');

//const worker = wx.createWorker('workers/request/index.js')
wxDownloader.REMOTE_SERVER_ROOT = "https://huandong-1257458597.cos.ap-guangzhou.myqcloud.com/HeadStrong";
wxDownloader.SUBCONTEXT_ROOT = "";
var pipeBeforeDownloader = cc.loader.md5Pipe || cc.loader.assetLoader;
cc.loader.insertPipeAfter(pipeBeforeDownloader, wxDownloader);

if (cc.sys.browserType === cc.sys.BROWSER_TYPE_WECHAT_GAME_SUB) {
    require('./libs/sub-context-adapter');
}
else {
    // Release Image objects after uploaded gl texture
    cc.macro.CLEANUP_IMAGE_CACHE = true;
}

window.boot();
//require('Argus/fpsstat-compiled.js')
