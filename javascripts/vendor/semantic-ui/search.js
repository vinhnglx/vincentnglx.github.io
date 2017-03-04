/*!
 * # Semantic UI - Search
 * http://github.com/semantic-org/semantic-ui/
 *
 *
 * Copyright 2015 Contributors
 * Released under the MIT license
 * http://opensource.org/licenses/MIT
 *
 */
!function(e,t,s,n){"use strict";e.fn.search=function(r){var i,a=e(this),c=a.selector||"",o=(new Date).getTime(),u=[],l=arguments[0],d="string"==typeof l,g=[].slice.call(arguments,1);return e(this).each(function(){var f,p=e.isPlainObject(r)?e.extend(!0,{},e.fn.search.settings,r):e.extend({},e.fn.search.settings),v=p.className,h=p.metadata,m=p.regExp,b=p.fields,y=p.selector,R=p.error,C=p.namespace,w="."+C,x=C+"-module",j=e(this),k=j.find(y.prompt),q=j.find(y.searchButton),E=j.find(y.results),A=(j.find(y.result),j.find(y.category),this),T=j.data(x);f={initialize:function(){f.verbose("Initializing module"),f.determine.searchFields(),f.bind.events(),f.set.type(),f.create.results(),f.instantiate()},instantiate:function(){f.verbose("Storing instance of module",f),T=f,j.data(x,f)},destroy:function(){f.verbose("Destroying instance"),j.off(w).removeData(x)},bind:{events:function(){f.verbose("Binding events to search"),p.automatic&&(j.on(f.get.inputEvent()+w,y.prompt,f.event.input),k.attr("autocomplete","off")),j.on("focus"+w,y.prompt,f.event.focus).on("blur"+w,y.prompt,f.event.blur).on("keydown"+w,y.prompt,f.handleKeyboard).on("click"+w,y.searchButton,f.query).on("mousedown"+w,y.results,f.event.result.mousedown).on("mouseup"+w,y.results,f.event.result.mouseup).on("click"+w,y.result,f.event.result.click)}},determine:{searchFields:function(){r&&r.searchFields!==n&&(p.searchFields=r.searchFields)}},event:{input:function(){clearTimeout(f.timer),f.timer=setTimeout(f.query,p.searchDelay)},focus:function(){f.set.focus(),f.has.minimumCharacters()&&(f.query(),f.can.show()&&f.showResults())},blur:function(){var e=s.activeElement===this,t=function(){f.cancel.query(),f.remove.focus(),f.timer=setTimeout(f.hideResults,p.hideDelay)};e||(f.resultsClicked?(f.debug("Determining if user action caused search to close"),j.one("click",y.results,function(){f.is.animating()||f.is.hidden()||t()})):(f.debug("Input blurred without user action, closing results"),t()))},result:{mousedown:function(){f.resultsClicked=!0},mouseup:function(){f.resultsClicked=!1},click:function(s){f.debug("Search result selected");var n=e(this),r=n.find(y.title).eq(0),i=n.find("a[href]").eq(0),a=i.attr("href")||!1,c=i.attr("target")||!1,o=(r.html(),r.length>0&&r.text()),u=f.get.results(),l=n.data(h.result)||f.get.result(o,u);return e.isFunction(p.onSelect)&&p.onSelect.call(A,l,u)===!1?void f.debug("Custom onSelect callback cancelled default select action"):(f.hideResults(),o&&f.set.value(o),void(a&&(f.verbose("Opening search link found in result",i),"_blank"==c||s.ctrlKey?t.open(a):t.location.href=a)))}}},handleKeyboard:function(e){var t,s=j.find(y.result),n=j.find(y.category),r=s.index(s.filter("."+v.active)),i=s.length,a=e.which,c={backspace:8,enter:13,escape:27,upArrow:38,downArrow:40};if(a==c.escape&&(f.verbose("Escape key pressed, blurring search field"),f.trigger.blur()),f.is.visible())if(a==c.enter){if(f.verbose("Enter key pressed, selecting active result"),s.filter("."+v.active).length>0)return f.event.result.click.call(s.filter("."+v.active),e),e.preventDefault(),!1}else a==c.upArrow?(f.verbose("Up key pressed, changing active result"),t=r-1<0?r:r-1,n.removeClass(v.active),s.removeClass(v.active).eq(t).addClass(v.active).closest(n).addClass(v.active),e.preventDefault()):a==c.downArrow&&(f.verbose("Down key pressed, changing active result"),t=r+1>=i?r:r+1,n.removeClass(v.active),s.removeClass(v.active).eq(t).addClass(v.active).closest(n).addClass(v.active),e.preventDefault());else a==c.enter&&(f.verbose("Enter key pressed, executing query"),f.query(),f.set.buttonPressed(),k.one("keyup",f.remove.buttonFocus))},setup:{api:function(){var e={debug:p.debug,on:!1,cache:"local",action:"search",onError:f.error};f.verbose("First request, initializing API"),j.api(e)}},can:{useAPI:function(){return e.fn.api!==n},show:function(){return f.is.focused()&&!f.is.visible()&&!f.is.empty()},transition:function(){return p.transition&&e.fn.transition!==n&&j.transition("is supported")}},is:{animating:function(){return E.hasClass(v.animating)},hidden:function(){return E.hasClass(v.hidden)},empty:function(){return""===E.html()},visible:function(){return E.filter(":visible").length>0},focused:function(){return k.filter(":focus").length>0}},trigger:{blur:function(){var e=s.createEvent("HTMLEvents"),t=k[0];t&&(f.verbose("Triggering native blur event"),e.initEvent("blur",!1,!1),t.dispatchEvent(e))}},get:{inputEvent:function(){var e=k[0],t=e!==n&&e.oninput!==n?"input":e!==n&&e.onpropertychange!==n?"propertychange":"keyup";return t},value:function(){return k.val()},results:function(){var e=j.data(h.results);return e},result:function(t,s){var r=["title","id"],i=!1;return t=t!==n?t:f.get.value(),s=s!==n?s:f.get.results(),"category"===p.type?(f.debug("Finding result that matches",t),e.each(s,function(s,n){if(e.isArray(n.results)&&(i=f.search.object(t,n.results,r)[0]))return!1})):(f.debug("Finding result in results object",t),i=f.search.object(t,s,r)[0]),i||!1}},set:{focus:function(){j.addClass(v.focus)},loading:function(){j.addClass(v.loading)},value:function(e){f.verbose("Setting search input value",e),k.val(e)},type:function(e){e=e||p.type,"category"==p.type&&j.addClass(p.type)},buttonPressed:function(){q.addClass(v.pressed)}},remove:{loading:function(){j.removeClass(v.loading)},focus:function(){j.removeClass(v.focus)},buttonPressed:function(){q.removeClass(v.pressed)}},query:function(){var t=f.get.value(),s=f.read.cache(t);f.has.minimumCharacters()?(s?(f.debug("Reading result from cache",t),f.save.results(s.results),f.addResults(s.html),f.inject.id(s.results)):(f.debug("Querying for",t),e.isPlainObject(p.source)||e.isArray(p.source)?f.search.local(t):f.can.useAPI()?f.search.remote(t):f.error(R.source)),p.onSearchQuery.call(A,t)):f.hideResults()},search:{local:function(e){var t,s=f.search.object(e,p.content);f.set.loading(),f.save.results(s),f.debug("Returned local search results",s),t=f.generateResults({results:s}),f.remove.loading(),f.addResults(t),f.inject.id(s),f.write.cache(e,{html:t,results:s})},remote:function(t){var s={onSuccess:function(e){f.parse.response.call(A,e,t)},onFailure:function(){f.displayMessage(R.serverError)},urlData:{query:t}};j.api("get request")||f.setup.api(),e.extend(!0,s,p.apiSettings),f.debug("Executing search",s),f.cancel.query(),j.api("setting",s).api("query")},object:function(t,s,r){var i=[],a=[],c=t.toString().replace(m.escape,"\\$&"),o=new RegExp(m.beginsWith+c,"i"),u=function(t,s){var n=e.inArray(s,i)==-1,r=e.inArray(s,a)==-1;n&&r&&t.push(s)};return s=s||p.source,r=r!==n?r:p.searchFields,e.isArray(r)||(r=[r]),s===n||s===!1?(f.error(R.source),[]):(e.each(r,function(n,r){e.each(s,function(e,s){var n="string"==typeof s[r];n&&(s[r].search(o)!==-1?u(i,s):p.searchFullText&&f.fuzzySearch(t,s[r])&&u(a,s))})}),e.merge(i,a))}},fuzzySearch:function(e,t){var s=t.length,n=e.length;if("string"!=typeof e)return!1;if(e=e.toLowerCase(),t=t.toLowerCase(),n>s)return!1;if(n===s)return e===t;e:for(var r=0,i=0;r<n;r++){for(var a=e.charCodeAt(r);i<s;)if(t.charCodeAt(i++)===a)continue e;return!1}return!0},parse:{response:function(e,t){var s=f.generateResults(e);f.verbose("Parsing server response",e),e!==n&&t!==n&&e[b.results]!==n&&(f.addResults(s),f.inject.id(e[b.results]),f.write.cache(t,{html:s,results:e[b.results]}),f.save.results(e[b.results]))}},cancel:{query:function(){f.can.useAPI()&&j.api("abort")}},has:{minimumCharacters:function(){var e=f.get.value(),t=e.length;return t>=p.minCharacters}},clear:{cache:function(e){var t=j.data(h.cache);e?e&&t&&t[e]&&(f.debug("Removing value from cache",e),delete t[e],j.data(h.cache,t)):(f.debug("Clearing cache",e),j.removeData(h.cache))}},read:{cache:function(e){var t=j.data(h.cache);return!!p.cache&&(f.verbose("Checking cache for generated html for query",e),"object"==typeof t&&t[e]!==n&&t[e])}},create:{id:function(e,t){var s,r,i=e+1;return t!==n?(s=String.fromCharCode(97+t),r=s+i,f.verbose("Creating category result id",r)):(r=i,f.verbose("Creating result id",r)),r},results:function(){0===E.length&&(E=e("<div />").addClass(v.results).appendTo(j))}},inject:{result:function(e,t,s){f.verbose("Injecting result into results");var r=s!==n?E.children().eq(s).children(y.result).eq(t):E.children(y.result).eq(t);f.verbose("Injecting results metadata",r),r.data(h.result,e)},id:function(t){f.debug("Injecting unique ids into results");var s=0,r=0;return"category"===p.type?e.each(t,function(t,i){r=0,e.each(i.results,function(e){var t=i.results[e];t.id===n&&(t.id=f.create.id(r,s)),f.inject.result(t,r,s),r++}),s++}):e.each(t,function(e){var s=t[e];s.id===n&&(s.id=f.create.id(r)),f.inject.result(s,r),r++}),t}},save:{results:function(e){f.verbose("Saving current search results to metadata",e),j.data(h.results,e)}},write:{cache:function(e,t){var s=j.data(h.cache)!==n?j.data(h.cache):{};p.cache&&(f.verbose("Writing generated html to cache",e,t),s[e]=t,j.data(h.cache,s))}},addResults:function(t){return e.isFunction(p.onResultsAdd)&&p.onResultsAdd.call(E,t)===!1?(f.debug("onResultsAdd callback cancelled default action"),!1):(E.html(t),void(f.can.show()&&f.showResults()))},showResults:function(){f.is.visible()||(f.can.transition()?(f.debug("Showing results with css animations"),E.transition({animation:p.transition+" in",debug:p.debug,verbose:p.verbose,duration:p.duration,queue:!0})):(f.debug("Showing results with javascript"),E.stop().fadeIn(p.duration,p.easing)),p.onResultsOpen.call(E))},hideResults:function(){f.is.visible()&&(f.can.transition()?(f.debug("Hiding results with css animations"),E.transition({animation:p.transition+" out",debug:p.debug,verbose:p.verbose,duration:p.duration,queue:!0})):(f.debug("Hiding results with javascript"),E.stop().fadeOut(p.duration,p.easing)),p.onResultsClose.call(E))},generateResults:function(t){f.debug("Generating html from response",t);var s=p.templates[p.type],n=e.isPlainObject(t[b.results])&&!e.isEmptyObject(t[b.results]),r=e.isArray(t[b.results])&&t[b.results].length>0,i="";return n||r?(p.maxResults>0&&(n?"standard"==p.type&&f.error(R.maxResults):t[b.results]=t[b.results].slice(0,p.maxResults)),e.isFunction(s)?i=s(t,b):f.error(R.noTemplate,!1)):i=f.displayMessage(R.noResults,"empty"),p.onResults.call(A,t),i},displayMessage:function(e,t){return t=t||"standard",f.debug("Displaying message",e,t),f.addResults(p.templates.message(e,t)),p.templates.message(e,t)},setting:function(t,s){if(e.isPlainObject(t))e.extend(!0,p,t);else{if(s===n)return p[t];p[t]=s}},internal:function(t,s){if(e.isPlainObject(t))e.extend(!0,f,t);else{if(s===n)return f[t];f[t]=s}},debug:function(){p.debug&&(p.performance?f.performance.log(arguments):(f.debug=Function.prototype.bind.call(console.info,console,p.name+":"),f.debug.apply(console,arguments)))},verbose:function(){p.verbose&&p.debug&&(p.performance?f.performance.log(arguments):(f.verbose=Function.prototype.bind.call(console.info,console,p.name+":"),f.verbose.apply(console,arguments)))},error:function(){f.error=Function.prototype.bind.call(console.error,console,p.name+":"),f.error.apply(console,arguments)},performance:{log:function(e){var t,s,n;p.performance&&(t=(new Date).getTime(),n=o||t,s=t-n,o=t,u.push({Name:e[0],Arguments:[].slice.call(e,1)||"",Element:A,"Execution Time":s})),clearTimeout(f.performance.timer),f.performance.timer=setTimeout(f.performance.display,500)},display:function(){var t=p.name+":",s=0;o=!1,clearTimeout(f.performance.timer),e.each(u,function(e,t){s+=t["Execution Time"]}),t+=" "+s+"ms",c&&(t+=" '"+c+"'"),a.length>1&&(t+=" ("+a.length+")"),(console.group!==n||console.table!==n)&&u.length>0&&(console.groupCollapsed(t),console.table?console.table(u):e.each(u,function(e,t){console.log(t.Name+": "+t["Execution Time"]+"ms")}),console.groupEnd()),u=[]}},invoke:function(t,s,r){var a,c,o,u=T;return s=s||g,r=A||r,"string"==typeof t&&u!==n&&(t=t.split(/[\. ]/),a=t.length-1,e.each(t,function(s,r){var i=s!=a?r+t[s+1].charAt(0).toUpperCase()+t[s+1].slice(1):t;if(e.isPlainObject(u[i])&&s!=a)u=u[i];else{if(u[i]!==n)return c=u[i],!1;if(!e.isPlainObject(u[r])||s==a)return u[r]!==n&&(c=u[r],!1);u=u[r]}})),e.isFunction(c)?o=c.apply(r,s):c!==n&&(o=c),e.isArray(i)?i.push(o):i!==n?i=[i,o]:o!==n&&(i=o),c}},d?(T===n&&f.initialize(),f.invoke(l)):(T!==n&&T.invoke("destroy"),f.initialize())}),i!==n?i:this},e.fn.search.settings={name:"Search",namespace:"search",debug:!1,verbose:!1,performance:!0,type:"standard",minCharacters:1,apiSettings:!1,source:!1,searchFields:["title","description"],displayField:"",searchFullText:!0,automatic:!0,hideDelay:0,searchDelay:200,maxResults:7,cache:!0,transition:"scale",duration:200,easing:"easeOutExpo",onSelect:!1,onResultsAdd:!1,onSearchQuery:function(){},onResults:function(){},onResultsOpen:function(){},onResultsClose:function(){},className:{animating:"animating",active:"active",empty:"empty",focus:"focus",hidden:"hidden",loading:"loading",results:"results",pressed:"down"},error:{source:"Cannot search. No source used, and Semantic API module was not included",noResults:"Your search returned no results",logging:"Error in debug logging, exiting.",noEndpoint:"No search endpoint was specified",noTemplate:"A valid template name was not specified.",serverError:"There was an issue querying the server.",maxResults:"Results must be an array to use maxResults setting",method:"The method you called is not defined."},metadata:{cache:"cache",results:"results",result:"result"},regExp:{escape:/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,beginsWith:"(?:s|^)"},fields:{categories:"results",categoryName:"name",categoryResults:"results",description:"description",image:"image",price:"price",results:"results",title:"title",url:"url",action:"action",actionText:"text",actionURL:"url"},selector:{prompt:".prompt",searchButton:".search.button",results:".results",category:".category",result:".result",title:".title, .name"},templates:{escape:function(e){var t=/[&<>"'`]/g,s=/[&<>"'`]/,n={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},r=function(e){return n[e]};return s.test(e)?e.replace(t,r):e},message:function(e,t){var s="";return e!==n&&t!==n&&(s+='<div class="message '+t+'">',s+="empty"==t?'<div class="header">No Results</div class="header"><div class="description">'+e+'</div class="description">':' <div class="description">'+e+"</div>",s+="</div>"),s},category:function(t,s){var r="";e.fn.search.settings.templates.escape;return t[s.categoryResults]!==n&&(e.each(t[s.categoryResults],function(t,i){i[s.results]!==n&&i.results.length>0&&(r+='<div class="category">',i[s.categoryName]!==n&&(r+='<div class="name">'+i[s.categoryName]+"</div>"),e.each(i.results,function(e,t){r+=t[s.url]?'<a class="result" href="'+t[s.url]+'">':'<a class="result">',t[s.image]!==n&&(r+='<div class="image"> <img src="'+t[s.image]+'"></div>'),r+='<div class="content">',t[s.price]!==n&&(r+='<div class="price">'+t[s.price]+"</div>"),t[s.title]!==n&&(r+='<div class="title">'+t[s.title]+"</div>"),t[s.description]!==n&&(r+='<div class="description">'+t[s.description]+"</div>"),r+="</div>",r+="</a>"}),r+="</div>")}),t[s.action]&&(r+='<a href="'+t[s.action][s.actionURL]+'" class="action">'+t[s.action][s.actionText]+"</a>"),r)},standard:function(t,s){var r="";return t[s.results]!==n&&(e.each(t[s.results],function(e,t){r+=t[s.url]?'<a class="result" href="'+t[s.url]+'">':'<a class="result">',t[s.image]!==n&&(r+='<div class="image"> <img src="'+t[s.image]+'"></div>'),r+='<div class="content">',t[s.price]!==n&&(r+='<div class="price">'+t[s.price]+"</div>"),t[s.title]!==n&&(r+='<div class="title">'+t[s.title]+"</div>"),t[s.description]!==n&&(r+='<div class="description">'+t[s.description]+"</div>"),r+="</div>",r+="</a>"}),t[s.action]&&(r+='<a href="'+t[s.action][s.actionURL]+'" class="action">'+t[s.action][s.actionText]+"</a>"),r)}}}}(jQuery,window,document);