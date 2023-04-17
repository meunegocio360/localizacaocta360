(function(){
var translateObjs = {};
function trans(c, d) {
    var e = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    translateObjs[e[0x0]] = e;
    return '';
}
function regTextVar(f, g) {
    var h = ![];
    return i(g);
    function i(p, q) {
        switch (p['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var s = function () {
                switch (p['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }();
            if (s) {
                return function () {
                    var x, y;
                    var z = (q && q['viewerName'] ? this['getComponentByName'](q['viewerName']) : undefined) || this['getMainViewer']();
                    if (p['toLowerCase']()['startsWith']('photo'))
                        x = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (B) {
                            var C = B['get']('player');
                            return C && C['get']('viewerArea') == z;
                        })['map'](function (D) {
                            return D['get']('media')['get']('playList');
                        });
                    else {
                        x = this['_getPlayListsWithViewer'](z);
                        y = o['bind'](this, z);
                    }
                    if (!h) {
                        for (var A = 0x0; A < x['length']; ++A) {
                            x[A]['bind']('changing', k, this);
                        }
                        h = !![];
                    }
                    return n['call'](this, x, s, y);
                };
            }
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](p);
            };
        default:
            if (p['toLowerCase']()['startsWith']('viewer.')) {
                var t = p['split']('.');
                var u = t[0x1];
                if (u) {
                    var v = t['slice'](0x2)['join']('.');
                    return i(v, { 'viewerName': u });
                }
            } else if (p['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                var w = undefined;
                var s = function () {
                    switch (p['toLowerCase']()) {
                    case 'quiz.questions.answered':
                        return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                    case 'quiz.question.count':
                        return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                    case 'quiz.items.found':
                        return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                    case 'quiz.item.count':
                        return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                    case 'quiz.score':
                        return TDV['Quiz']['PROPERTY']['SCORE'];
                    case 'quiz.score.total':
                        return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                    case 'quiz.time.remaining':
                        return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                    case 'quiz.time.elapsed':
                        return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                    case 'quiz.time.limit':
                        return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                    case 'quiz.media.items.found':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                    case 'quiz.media.item.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                    case 'quiz.media.questions.answered':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                    case 'quiz.media.question.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                    case 'quiz.media.score':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                    case 'quiz.media.score.total':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                    case 'quiz.media.index':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                    case 'quiz.media.count':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                    case 'quiz.media.visited':
                        return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                    default:
                        var E = /quiz\.([\w_]+)\.(.+)/['exec'](p);
                        if (E) {
                            w = E[0x1];
                            switch ('quiz.' + E[0x2]) {
                            case 'quiz.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            }
                        }
                    }
                }();
                if (s) {
                    return function () {
                        var F = this['get']('data')['quiz'];
                        if (F) {
                            if (!h) {
                                if (w != undefined)
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, J[L]['id'], s), this);
                                        }
                                    } else {
                                        F['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], m['call'](this, w, s), this);
                                    }
                                else
                                    F['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], l['call'](this, s), this);
                                h = !![];
                            }
                            try {
                                var O = 0x0;
                                if (w != undefined) {
                                    if (w == 'global') {
                                        var H = this['get']('data')['quizConfig'];
                                        var J = H['objectives'];
                                        for (var L = 0x0, N = J['length']; L < N; ++L) {
                                            O += F['getObjective'](J[L]['id'], s);
                                        }
                                    } else {
                                        O = F['getObjective'](w, s);
                                    }
                                } else {
                                    O = F['get'](s);
                                    if (s == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                        O += 0x1;
                                }
                                return O;
                            } catch (P) {
                                return undefined;
                            }
                        }
                    };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function j() {
        var Q = this['get']('data');
        Q['updateText'](Q['translateObjs'][f]);
    }
    function k(R) {
        var S = R['data']['nextSelectedIndex'];
        if (S >= 0x0) {
            var T = R['source']['get']('items')[S];
            var U = function () {
                T['unbind']('begin', U, this);
                j['call'](this);
            };
            T['bind']('begin', U, this);
        }
    }
    function l(V) {
        return function (W) {
            if (V in W) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function m(X, Y) {
        return function (Z, a0) {
            if (X == Z && Y in a0) {
                j['call'](this);
            }
        }['bind'](this);
    }
    function n(a1, a2, a3) {
        for (var a4 = 0x0; a4 < a1['length']; ++a4) {
            var a5 = a1[a4];
            var a6 = a5['get']('selectedIndex');
            if (a6 >= 0x0) {
                var a7 = a2['split']('.');
                var a8 = a5['get']('items')[a6];
                if (a3 !== undefined && !a3['call'](this, a8))
                    continue;
                for (var a9 = 0x0; a9 < a7['length']; ++a9) {
                    if (a8 == undefined)
                        return '';
                    a8 = 'get' in a8 ? a8['get'](a7[a9]) : a8[a7[a9]];
                }
                return a8;
            }
        }
        return '';
    }
    function o(aa, ab) {
        var ac = ab['get']('player');
        return ac !== undefined && ac['get']('viewerArea') == aa;
    }
}
var script = {"backgroundColor":["#FFFFFF"],"id":"rootPlayer","start":"this.playAudioList([this.audio_9CEC3E1F_8D17_20C5_41BD_FDD5514F0EC6], true); this.init()","data":{"defaultLocale":"pt","locales":{"pt":"locale/pt.txt"},"textToSpeechConfig":{"volume":1,"stopBackgroundAudio":false,"speechOnQuizQuestion":false,"speechOnInfoWindow":false,"rate":1,"speechOnTooltip":false,"pitch":1},"name":"Player760","history":{}},"scripts":{"quizStart":TDV.Tour.Script.quizStart,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"resumePlayers":TDV.Tour.Script.resumePlayers,"getOverlays":TDV.Tour.Script.getOverlays,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getComponentByName":TDV.Tour.Script.getComponentByName,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"mixObject":TDV.Tour.Script.mixObject,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"createTween":TDV.Tour.Script.createTween,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"translate":TDV.Tour.Script.translate,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getKey":TDV.Tour.Script.getKey,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"init":TDV.Tour.Script.init,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"registerKey":TDV.Tour.Script.registerKey,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"historyGoBack":TDV.Tour.Script.historyGoBack,"unregisterKey":TDV.Tour.Script.unregisterKey,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"historyGoForward":TDV.Tour.Script.historyGoForward,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"existsKey":TDV.Tour.Script.existsKey,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"setMapLocation":TDV.Tour.Script.setMapLocation,"setLocale":TDV.Tour.Script.setLocale,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"initAnalytics":TDV.Tour.Script.initAnalytics,"quizFinish":TDV.Tour.Script.quizFinish,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"cloneBindings":TDV.Tour.Script.cloneBindings,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"clone":TDV.Tour.Script.clone,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"initQuiz":TDV.Tour.Script.initQuiz,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"downloadFile":TDV.Tour.Script.downloadFile,"isPanorama":TDV.Tour.Script.isPanorama,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"executeJS":TDV.Tour.Script.executeJS,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"setValue":TDV.Tour.Script.setValue,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"shareSocial":TDV.Tour.Script.shareSocial,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"textToSpeech":TDV.Tour.Script.textToSpeech,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"quizShowScore":TDV.Tour.Script.quizShowScore,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"showPopupImage":TDV.Tour.Script.showPopupImage,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"playAudioList":TDV.Tour.Script.playAudioList,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"openLink":TDV.Tour.Script.openLink,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"getMediaByName":TDV.Tour.Script.getMediaByName,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"showWindow":TDV.Tour.Script.showWindow,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"startMeasurement":TDV.Tour.Script.startMeasurement,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"getMainViewer":TDV.Tour.Script.getMainViewer,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"getPixels":TDV.Tour.Script.getPixels},"class":"Player","watermark":false,"height":"100%","backgroundColorRatios":[0],"scrollBarColor":"#000000","layout":"absolute","children":["this.MainViewer"],"defaultMenu":["fullscreen","mute","rotation"],"scrollBarMargin":2,"gap":10,"width":"100%","propagateClick":false,"minHeight":0,"minWidth":0,"hash": "1b7dee1cecf358c9bbc92c75de882b8fa8cba6abbb56ff2bbacb17c407f39aca", "definitions": [{"id":"panorama_87D63AA5_8D14_E1C5_41CD_A9ADF0C84B5B","label":trans('panorama_87D63AA5_8D14_E1C5_41CD_A9ADF0C84B5B.label'),"hfov":360,"data":{"label":"Drone CTA"},"overlays":["this.overlay_8307081B_8D1B_20CE_41D7_8E2A23660355","this.overlay_83D398CD_8D15_2145_41A9_D0679749761A","this.overlay_83449BD0_8D17_675B_41B4_08DAEF2F691B","this.overlay_83457BD4_8D17_675B_41D4_41E73BD14CA1","this.overlay_82A40CC3_8D15_61BD_41CD_F99D21F96771","this.overlay_82A3BCC3_8D15_61BD_41BF_84B611AFD182","this.overlay_823FAAB3_8D2B_21DD_41DB_DA74CA5F3E40","this.overlay_823F0AB4_8D2B_21DB_41C1_5AAF7AB19ECD","this.overlay_9D2C01CE_8D2D_6346_41DE_18278EE946F6","this.overlay_9EED4569_8D6B_234D_41D3_0A5FD956D911","this.overlay_9EED9569_8D6B_234D_41DE_FF5654B624D8"],"frames":[{"thumbnailUrl":"media/panorama_87D63AA5_8D14_E1C5_41CD_A9ADF0C84B5B_t.jpg","cube":{"levels":[{"tags":"ondemand","height":3072,"colCount":36,"url":"media/panorama_87D63AA5_8D14_E1C5_41CD_A9ADF0C84B5B_0/{face}/0/{row}_{column}.jpg","rowCount":6,"width":18432,"class":"TiledImageResourceLevel"},{"tags":"ondemand","height":1536,"colCount":18,"url":"media/panorama_87D63AA5_8D14_E1C5_41CD_A9ADF0C84B5B_0/{face}/1/{row}_{column}.jpg","rowCount":3,"width":9216,"class":"TiledImageResourceLevel"},{"tags":"ondemand","height":1024,"colCount":12,"url":"media/panorama_87D63AA5_8D14_E1C5_41CD_A9ADF0C84B5B_0/{face}/2/{row}_{column}.jpg","rowCount":2,"width":6144,"class":"TiledImageResourceLevel"},{"tags":["ondemand","preload"],"height":512,"colCount":6,"url":"media/panorama_87D63AA5_8D14_E1C5_41CD_A9ADF0C84B5B_0/{face}/3/{row}_{column}.jpg","rowCount":1,"width":3072,"class":"TiledImageResourceLevel"},{"tags":"mobilevr","height":1536,"colCount":6,"url":"media/panorama_87D63AA5_8D14_E1C5_41CD_A9ADF0C84B5B_0/{face}/vr/0.jpg","rowCount":1,"width":9216,"class":"TiledImageResourceLevel"},{"tags":"mobilevr2gen","height":2048,"colCount":6,"url":"media/panorama_87D63AA5_8D14_E1C5_41CD_A9ADF0C84B5B_0/{face}/vr2gen/0.jpg","rowCount":1,"width":12288,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"adjacentPanoramas":[{"yaw":0.05,"panorama":"this.panorama_9DEE7637_8D2D_60C5_41E0_45260AAB6B1E","distance":0.6,"class":"AdjacentPanorama","data":{"overlayID":"overlay_9D2C01CE_8D2D_6346_41DE_18278EE946F6"},"select":"this.overlay_9D2C01CE_8D2D_6346_41DE_18278EE946F6.get('areas').forEach(function(a){ a.trigger('click') })"}],"thumbnailUrl":"media/panorama_87D63AA5_8D14_E1C5_41CD_A9ADF0C84B5B_t.jpg","class":"Panorama","hfovMax":130,"vfov":180},{"id":"mainPlayList","items":["this.PanoramaPlayListItem_983B69C7_8D75_2345_41D9_C8B6C160ED7E","this.PanoramaPlayListItem_983B29C7_8D75_2345_41B1_93FDB165A063"],"class":"PlayList"},{"id":"panorama_87D63AA5_8D14_E1C5_41CD_A9ADF0C84B5B_camera","displayOriginPosition":{"stereographicFactor":1,"yaw":2.42,"hfov":165,"pitch":-90,"class":"RotationalCameraDisplayPosition"},"class":"PanoramaCamera","enterPointingToHorizon":true,"initialSequence":"this.sequence_87F47DB5_8D15_23C5_41D0_FA514D319A60","initialPosition":{"yaw":2.42,"hfov":125,"pitch":-53.96,"class":"PanoramaCameraPosition"},"displayMovements":[{"duration":1000,"class":"TargetRotationalCameraDisplayMovement"},{"duration":3000,"easing":"cubic_in_out","targetHfov":125,"class":"TargetRotationalCameraDisplayMovement","targetStereographicFactor":0,"targetPitch":-53.96}]},{"id":"MainViewerPanoramaPlayer","class":"PanoramaPlayer","aaEnabled":true,"viewerArea":"this.MainViewer","mouseControlMode":"drag_rotation","touchControlMode":"drag_rotation","arrowKeysAction":"translate","mode":"quality"},{"toolTipPaddingTop":4,"id":"MainViewer","subtitlesTextShadowOpacity":1,"toolTipBorderColor":"#767676","data":{"name":"Main Viewer"},"firstTransitionDuration":0,"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarLeft":0,"playbackBarHeadBorderColor":"#000000","playbackBarHeadShadow":true,"progressBackgroundColorRatios":[0],"progressRight":"33%","playbackBarHeadBackgroundColor":["#111111","#666666"],"progressOpacity":0.7,"playbackBarBottom":5,"subtitlesFontColor":"#FFFFFF","subtitlesTextShadowVerticalLength":1,"progressBarBorderColor":"#000000","vrPointerSelectionColor":"#FF6600","progressBarBackgroundColorDirection":"horizontal","progressBarBackgroundColorRatios":[0],"playbackBarHeadWidth":6,"width":"100%","playbackBarProgressBackgroundColorRatios":[0],"minHeight":50,"playbackBarHeight":10,"playbackBarProgressBorderColor":"#000000","toolTipTextShadowColor":"#000000","surfaceReticleColor":"#FFFFFF","playbackBarProgressBorderSize":0,"toolTipPaddingBottom":4,"vrPointerSelectionTime":2000,"toolTipPaddingLeft":6,"subtitlesBottom":50,"minWidth":100,"playbackBarBackgroundOpacity":1,"progressBackgroundColor":["#000000"],"playbackBarHeadHeight":15,"progressBorderColor":"#000000","toolTipFontFamily":"Arial","progressBarBackgroundColor":["#FF3300"],"subtitlesTop":0,"subtitlesTextShadowColor":"#000000","progressBottom":10,"playbackBarProgressBorderRadius":0,"toolTipPaddingRight":6,"toolTipShadowColor":"#333138","toolTipFontColor":"#606060","subtitlesFontSize":"3vmin","progressHeight":2,"playbackBarProgressBackgroundColor":["#3399FF"],"progressBorderSize":0,"playbackBarBorderSize":0,"progressBarBorderRadius":2,"subtitlesBorderColor":"#FFFFFF","playbackBarBorderColor":"#FFFFFF","progressBarBorderSize":0,"playbackBarHeadShadowColor":"#000000","surfaceReticleSelectionColor":"#FFFFFF","subtitlesBackgroundOpacity":0.2,"class":"ViewerArea","playbackBarHeadBackgroundColorRatios":[0,1],"height":"100%","vrPointerColor":"#FFFFFF","playbackBarHeadShadowOpacity":0.7,"toolTipFontSize":"1.11vmin","progressLeft":"33%","subtitlesTextShadowHorizontalLength":1,"subtitlesFontFamily":"Arial","progressBorderRadius":2,"playbackBarHeadBorderRadius":0,"playbackBarBackgroundColorDirection":"vertical","playbackBarHeadShadowBlurRadius":3,"playbackBarHeadBorderSize":0,"propagateClick":false,"playbackBarRight":0,"toolTipBackgroundColor":"#F6F6F6","playbackBarBorderRadius":0,"subtitlesBackgroundColor":"#000000","subtitlesGap":0},{"id":"panorama_9DEE7637_8D2D_60C5_41E0_45260AAB6B1E_camera","initialPosition":{"yaw":-4.49,"hfov":125,"pitch":8.51,"class":"PanoramaCameraPosition"},"enterPointingToHorizon":true,"class":"PanoramaCamera","initialSequence":"this.sequence_8214F08D_8D2D_21C5_41D1_7DA1A14B6C5D"},{"id":"audio_9CEC3E1F_8D17_20C5_41BD_FDD5514F0EC6","audio":"this.audiores_9CD257E7_8D14_EF45_41CB_858EBE13FBD4","class":"MediaAudio","data":{"label":"X2Download.com - Hip Hop - M\u00daSICA PARA USAR EM FUNDO DE V\u00cdDEOS (SEM DIREITOS AUTORAIS) (128 kbps)"},"autoplay":true},{"id":"panorama_9DEE7637_8D2D_60C5_41E0_45260AAB6B1E","label":trans('panorama_9DEE7637_8D2D_60C5_41E0_45260AAB6B1E.label'),"hfov":360,"data":{"label":"Fachada Dom Bosco"},"overlays":["this.overlay_9D9C6DA1_8D2B_23FD_41DC_7B9DAD73B149"],"frames":[{"thumbnailUrl":"media/panorama_9DEE7637_8D2D_60C5_41E0_45260AAB6B1E_t.jpg","cube":{"levels":[{"tags":"ondemand","height":2560,"colCount":30,"url":"media/panorama_9DEE7637_8D2D_60C5_41E0_45260AAB6B1E_0/{face}/0/{row}_{column}.jpg","rowCount":5,"width":15360,"class":"TiledImageResourceLevel"},{"tags":"ondemand","height":1536,"colCount":18,"url":"media/panorama_9DEE7637_8D2D_60C5_41E0_45260AAB6B1E_0/{face}/1/{row}_{column}.jpg","rowCount":3,"width":9216,"class":"TiledImageResourceLevel"},{"tags":"ondemand","height":1024,"colCount":12,"url":"media/panorama_9DEE7637_8D2D_60C5_41E0_45260AAB6B1E_0/{face}/2/{row}_{column}.jpg","rowCount":2,"width":6144,"class":"TiledImageResourceLevel"},{"tags":["ondemand","preload"],"height":512,"colCount":6,"url":"media/panorama_9DEE7637_8D2D_60C5_41E0_45260AAB6B1E_0/{face}/3/{row}_{column}.jpg","rowCount":1,"width":3072,"class":"TiledImageResourceLevel"},{"tags":"mobilevr","height":1536,"colCount":6,"url":"media/panorama_9DEE7637_8D2D_60C5_41E0_45260AAB6B1E_0/{face}/vr/0.jpg","rowCount":1,"width":9216,"class":"TiledImageResourceLevel"},{"tags":"mobilevr2gen","height":2048,"colCount":6,"url":"media/panorama_9DEE7637_8D2D_60C5_41E0_45260AAB6B1E_0/{face}/vr2gen/0.jpg","rowCount":1,"width":12288,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"adjacentPanoramas":[{"yaw":-179.75,"panorama":"this.panorama_87D63AA5_8D14_E1C5_41CD_A9ADF0C84B5B","distance":100,"class":"AdjacentPanorama","data":{"overlayID":"overlay_9D9C6DA1_8D2B_23FD_41DC_7B9DAD73B149"},"select":"this.overlay_9D9C6DA1_8D2B_23FD_41DC_7B9DAD73B149.get('areas').forEach(function(a){ a.trigger('click') })"}],"hfovMin":"135%","thumbnailUrl":"media/panorama_9DEE7637_8D2D_60C5_41E0_45260AAB6B1E_t.jpg","class":"Panorama","hfovMax":130,"vfov":180},{"id":"overlay_8307081B_8D1B_20CE_41D7_8E2A23660355","class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_838E3886_8D1B_21C7_41CE_16E874FB5658"],"useHandCursor":true,"items":[{"hfov":26.05,"distance":50,"rotationX":179.45,"scaleMode":"fit_inside","pitch":-9.32,"yaw":89.77,"data":{"label":"INFO_BRANCO"},"image":"this.res_9C35F667_8D17_6145_41D5_5810ED59DC02","class":"HotspotPanoramaOverlayImage","vfov":11.76}],"data":{"label":"INFO_BRANCO"},"maps":[],"enabledInCardboard":true},{"id":"overlay_83D398CD_8D15_2145_41A9_D0679749761A","class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_8210191E_8D15_20C6_41CB_B4188D119D11"],"useHandCursor":true,"items":["this.HotspotPanoramaOverlayTextImage_83D7B8C9_8D15_214C_41D8_1BFC839C7F63"],"data":{"label":"Texto"},"maps":[],"enabledInCardboard":true},{"id":"overlay_83449BD0_8D17_675B_41B4_08DAEF2F691B","class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_8345ABD0_8D17_675B_41B4_A65245A57B68"],"useHandCursor":true,"items":[{"hfov":26.05,"distance":50,"rotationX":179.45,"roll":7.78,"pitch":-45.97,"class":"HotspotPanoramaOverlayImage","yaw":16.59,"scaleMode":"fit_inside","image":"this.res_9C35F667_8D17_6145_41D5_5810ED59DC02","data":{"label":"INFO_BRANCO"},"vfov":11.76}],"data":{"label":"INFO_BRANCO"},"maps":[],"enabledInCardboard":true},{"id":"overlay_83457BD4_8D17_675B_41D4_41E73BD14CA1","class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_83454BD4_8D17_675B_41D5_028E934CB059"],"useHandCursor":true,"items":["this.HotspotPanoramaOverlayTextImage_8343CBD4_8D17_675B_41C3_AB0BB7AE48FB"],"data":{"label":"Texto"},"maps":[],"enabledInCardboard":true},{"id":"overlay_82A40CC3_8D15_61BD_41CD_F99D21F96771","class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_82A46CC3_8D15_61BD_41E0_54198E87B793"],"useHandCursor":true,"items":[{"hfov":26.05,"distance":50,"rotationX":179.45,"roll":0.53,"pitch":-5.88,"class":"HotspotPanoramaOverlayImage","yaw":-72.16,"scaleMode":"fit_inside","image":"this.res_9C35F667_8D17_6145_41D5_5810ED59DC02","data":{"label":"INFO_BRANCO"},"vfov":11.76}],"data":{"label":"INFO_BRANCO"},"maps":[],"enabledInCardboard":true},{"id":"overlay_82A3BCC3_8D15_61BD_41BF_84B611AFD182","class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_82A3ACC3_8D15_61BD_41CC_A541AADBCB7E"],"useHandCursor":true,"items":["this.HotspotPanoramaOverlayTextImage_82A3DCCE_8D15_6147_416F_B894545FA1C1"],"data":{"label":"Texto"},"maps":[],"enabledInCardboard":true},{"id":"overlay_823FAAB3_8D2B_21DD_41DB_DA74CA5F3E40","class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_823FFAB3_8D2B_21DD_41D9_1353EC7958F6"],"useHandCursor":true,"items":[{"hfov":26.05,"distance":50,"rotationX":179.45,"roll":-2.9,"pitch":-15.63,"class":"HotspotPanoramaOverlayImage","yaw":-109.39,"scaleMode":"fit_inside","image":"this.res_9C35F667_8D17_6145_41D5_5810ED59DC02","data":{"label":"INFO_BRANCO"},"vfov":11.76}],"data":{"label":"INFO_BRANCO"},"maps":[],"enabledInCardboard":true},{"id":"overlay_823F0AB4_8D2B_21DB_41C1_5AAF7AB19ECD","class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_823F3AB4_8D2B_21DB_41D0_6CAA38556DDB"],"useHandCursor":true,"items":["this.HotspotPanoramaOverlayTextImage_82388AB4_8D2B_21DB_41DB_7C915636EB96"],"data":{"label":"Texto"},"maps":[],"enabledInCardboard":true},{"id":"overlay_9D2C01CE_8D2D_6346_41DE_18278EE946F6","class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_9D5861F3_8D2D_635D_41D0_2851457639EC"],"useHandCursor":true,"items":[{"hfov":30.38,"distance":100,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","vfov":23.27,"data":{"label":"Arrow 06a"},"yaw":0.05,"image":"this.AnimatedImageResource_983E196A_8D75_234F_41D8_CB6C4EE6228E","pitch":-70.44}],"data":{"label":"Arrow 06a","hasPanoramaAction":true},"maps":[],"enabledInCardboard":true},{"id":"overlay_9EED4569_8D6B_234D_41D3_0A5FD956D911","class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_9EED5569_8D6B_234D_41D7_62EA5126C64A"],"useHandCursor":true,"items":[{"hfov":26.05,"distance":50,"rotationX":179.45,"roll":1.9,"pitch":-18.11,"class":"HotspotPanoramaOverlayImage","yaw":-171.55,"scaleMode":"fit_inside","image":"this.res_9C35F667_8D17_6145_41D5_5810ED59DC02","data":{"label":"INFO_BRANCO"},"vfov":11.76}],"data":{"label":"INFO_BRANCO"},"maps":[],"enabledInCardboard":true},{"id":"overlay_9EED9569_8D6B_234D_41DE_FF5654B624D8","class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_9EEDA569_8D6B_234D_41D6_04D18444B7E0"],"useHandCursor":true,"items":["this.HotspotPanoramaOverlayTextImage_9EEDB569_8D6B_234C_41DA_AC30082FD499"],"data":{"label":"Texto"},"maps":[],"enabledInCardboard":true},{"id":"PanoramaPlayListItem_983B69C7_8D75_2345_41D9_C8B6C160ED7E","class":"PanoramaPlayListItem","camera":"this.panorama_87D63AA5_8D14_E1C5_41CD_A9ADF0C84B5B_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_87D63AA5_8D14_E1C5_41CD_A9ADF0C84B5B","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"id":"PanoramaPlayListItem_983B29C7_8D75_2345_41B1_93FDB165A063","class":"PanoramaPlayListItem","end":"this.trigger('tourEnded')","camera":"this.panorama_9DEE7637_8D2D_60C5_41E0_45260AAB6B1E_camera","player":"this.MainViewerPanoramaPlayer","media":"this.panorama_9DEE7637_8D2D_60C5_41E0_45260AAB6B1E","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 0)"},{"id":"sequence_87F47DB5_8D15_23C5_41D0_FA514D319A60","class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96}]},{"id":"sequence_8214F08D_8D2D_21C5_41D1_7DA1A14B6C5D","class":"PanoramaCameraSequence","movements":[{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":323,"yawSpeed":7.96},{"class":"DistancePanoramaCameraMovement","yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96}]},{"id":"audiores_9CD257E7_8D14_EF45_41CB_858EBE13FBD4","mp3Url":trans('audiores_9CD257E7_8D14_EF45_41CB_858EBE13FBD4.mp3Url'),"class":"AudioResource"},{"id":"overlay_9D9C6DA1_8D2B_23FD_41DC_7B9DAD73B149","class":"HotspotPanoramaOverlay","areas":["this.HotspotPanoramaOverlayArea_9D9CBDA1_8D2B_23FD_41D2_1A40D3D7A4D1"],"useHandCursor":true,"items":[{"hfov":30.38,"distance":100,"class":"HotspotPanoramaOverlayImage","scaleMode":"fit_inside","vfov":23.27,"data":{"label":"Arrow 06a"},"yaw":-179.75,"image":"this.AnimatedImageResource_983E696B_8D75_234D_41C2_E07EC7221F88","pitch":23.47}],"data":{"label":"Arrow 06a"},"maps":[],"enabledInCardboard":true},{"id":"HotspotPanoramaOverlayArea_838E3886_8D1B_21C7_41CE_16E874FB5658","displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"class":"ImageResource","id":"res_9C35F667_8D17_6145_41D5_5810ED59DC02","levels":[{"height":417,"url":"media/res_9C35F667_8D17_6145_41D5_5810ED59DC02_0.png","width":817,"class":"ImageResourceLevel"}]},{"id":"HotspotPanoramaOverlayArea_8210191E_8D15_20C6_41CB_B4188D119D11","displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"HotspotPanoramaOverlayTextImage_83D7B8C9_8D15_214C_41D8_1BFC839C7F63","hfov":27.03,"data":{"label":"Texto"},"distance":50,"class":"HotspotPanoramaOverlayImage","roll":0.75,"pitch":-4.24,"yaw":93.6,"image":{"class":"ImageResource","levels":["this.imlevel_9C21C76B_8D17_6F4D_41D6_FB6B938FCCFF"]},"vfov":3.8},{"id":"HotspotPanoramaOverlayArea_8345ABD0_8D17_675B_41B4_A65245A57B68","displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"HotspotPanoramaOverlayArea_83454BD4_8D17_675B_41D5_028E934CB059","displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"HotspotPanoramaOverlayTextImage_8343CBD4_8D17_675B_41C3_AB0BB7AE48FB","hfov":27.03,"data":{"label":"Texto"},"distance":50,"class":"HotspotPanoramaOverlayImage","roll":10.25,"pitch":-40.54,"yaw":20.33,"image":{"class":"ImageResource","levels":["this.imlevel_9C7517B3_8D17_6FDD_41E1_7CA1C3A2003F"]},"vfov":3.8},{"id":"HotspotPanoramaOverlayArea_82A46CC3_8D15_61BD_41E0_54198E87B793","displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"HotspotPanoramaOverlayArea_82A3ACC3_8D15_61BD_41CC_A541AADBCB7E","displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"HotspotPanoramaOverlayTextImage_82A3DCCE_8D15_6147_416F_B894545FA1C1","hfov":27.03,"data":{"label":"Texto"},"distance":50,"class":"HotspotPanoramaOverlayImage","roll":-0.02,"pitch":-1,"yaw":-70.71,"image":{"class":"ImageResource","levels":["this.imlevel_9C6CD7FA_8D17_6F4F_41C8_A990D1ED11BB"]},"vfov":3.8},{"id":"HotspotPanoramaOverlayArea_823FFAB3_8D2B_21DD_41D9_1353EC7958F6","displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"HotspotPanoramaOverlayArea_823F3AB4_8D2B_21DB_41D0_6CAA38556DDB","displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"HotspotPanoramaOverlayTextImage_82388AB4_8D2B_21DB_41DB_7C915636EB96","hfov":27.03,"data":{"label":"Texto"},"distance":50,"class":"HotspotPanoramaOverlayImage","roll":-2.32,"pitch":-10.66,"yaw":-107.73,"image":{"class":"ImageResource","levels":["this.imlevel_9C6D6842_8D17_60BF_41C9_20BE9A85B908"]},"vfov":3.8},{"id":"HotspotPanoramaOverlayArea_9D5861F3_8D2D_635D_41D0_2851457639EC","mapColor":"any","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_983B29C7_8D75_2345_41B1_93FDB165A063, -3.876923076923077, 18.50769230769231, 125 || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 1)"},{"id":"AnimatedImageResource_983E196A_8D75_234F_41D8_CB6C4EE6228E","colCount":4,"class":"AnimatedImageResource","frameDuration":41,"rowCount":6,"levels":[{"height":420,"url":"media/res_9C30B66A_8D17_614F_41CE_5C604F8D9E37_0.png","width":480,"class":"ImageResourceLevel"}],"finalFrame":"first","frameCount":24},{"id":"HotspotPanoramaOverlayArea_9EED5569_8D6B_234D_41D7_62EA5126C64A","displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"HotspotPanoramaOverlayArea_9EEDA569_8D6B_234D_41D6_04D18444B7E0","displayTooltipInTouchScreens":true,"mapColor":"any","class":"HotspotPanoramaOverlayArea"},{"id":"HotspotPanoramaOverlayTextImage_9EEDB569_8D6B_234C_41DA_AC30082FD499","hfov":27.03,"data":{"label":"Texto"},"distance":50,"class":"HotspotPanoramaOverlayImage","roll":2.88,"pitch":-12.96,"yaw":-168.76,"image":{"class":"ImageResource","levels":["this.imlevel_9824D845_8D75_2145_41DD_24C3A57462AA"]},"vfov":3.8},{"id":"HotspotPanoramaOverlayArea_9D9CBDA1_8D2B_23FD_41D2_1A40D3D7A4D1","mapColor":"any","class":"HotspotPanoramaOverlayArea","displayTooltipInTouchScreens":true,"click":"this.setPanoramaCameraWithSpot(this.mainPlayList, this.PanoramaPlayListItem_983B69C7_8D75_2345_41D9_C8B6C160ED7E, 1.1076923076923078, -58.52665474060822, 125 || TDV.Player.DEFAULT_PANORAMA_HFOV); this.setPlayListSelectedIndex(this.mainPlayList, 0)"},{"id":"AnimatedImageResource_983E696B_8D75_234D_41C2_E07EC7221F88","colCount":4,"class":"AnimatedImageResource","frameDuration":41,"rowCount":6,"levels":[{"height":420,"url":"media/res_9C30B66A_8D17_614F_41CE_5C604F8D9E37_0.png","width":480,"class":"ImageResourceLevel"}],"finalFrame":"first","frameCount":24},{"id":"imlevel_9C21C76B_8D17_6F4D_41D6_FB6B938FCCFF","height":186.45,"class":"ImageResourceLevel","url":trans('imlevel_9C21C76B_8D17_6F4D_41D6_FB6B938FCCFF.url'),"width":1351.43},{"id":"imlevel_9C7517B3_8D17_6FDD_41E1_7CA1C3A2003F","height":186.45,"class":"ImageResourceLevel","url":trans('imlevel_9C7517B3_8D17_6FDD_41E1_7CA1C3A2003F.url'),"width":1351.43},{"id":"imlevel_9C6CD7FA_8D17_6F4F_41C8_A990D1ED11BB","height":186.45,"class":"ImageResourceLevel","url":trans('imlevel_9C6CD7FA_8D17_6F4F_41C8_A990D1ED11BB.url'),"width":1351.43},{"id":"imlevel_9C6D6842_8D17_60BF_41C9_20BE9A85B908","height":186.45,"class":"ImageResourceLevel","url":trans('imlevel_9C6D6842_8D17_60BF_41C9_20BE9A85B908.url'),"width":1351.43},{"id":"imlevel_9824D845_8D75_2145_41DD_24C3A57462AA","height":186.45,"class":"ImageResourceLevel","url":trans('imlevel_9824D845_8D75_2145_41DD_24C3A57462AA.url'),"width":1351.43}]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs;
script['data']['createQuizConfig'] = function () {
    var ad = {};
    this['get']('data')['translateObjs'] = translateObjs;
    return ad;
};
TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device_v2023.0.7.js.map
})();
//Generated with v2023.0.7, Mon Apr 17 2023