/* Build with bb-lp-cli @ v1.3.0 */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("base"),require("core"),require("ui")):"function"==typeof define&&define.amd?define(["base","core","ui"],t):"object"==typeof exports?exports.widgetAccounts=t(require("base"),require("core"),require("ui")):e.widgetAccounts=t(e.base,e.core,e.ui)}(this,function(e,t,n){return function(e){function t(o){if(n[o])return n[o].exports;var c=n[o]={exports:{},id:o,loaded:!1};return (e[o].call(c.exports,c,c.exports,t), c.loaded=!0, c.exports)}var n={};return (t.m=e, t.c=n, t.p="/_karma_webpack_//", t(0))}([function(e,t,n){var o;(function(e){o=function(require,e,t){"use strict";function o(e,t){t&&t.model&&e.publish("cxp.item.loaded",{id:t.model.name})}o.$inject=["lpCoreBus","lpWidget"],t.name="widget-accounts";var c=n(2),s=n(3),r=n(4),a=[s.name,r.name];t.exports=c.createModule(t.name,a).directive(n(5)).directive(n(6)).directive(n(7)).directive(n(8)).service(n(9)).factory(n(10)).controller(n(11)).run(o)}.call(t,n,t,e),!(void 0!==o&&(e.exports=o))}).call(t,n(1)(e))},function(e,t){e.exports=function(e){return (e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children=[],e.webpackPolyfill=1), e)}},function(t,n){t.exports=e},function(e,n){e.exports=t},function(e,t){e.exports=n},function(e,t,n){var o;o=function(require,e,t){"use strict";e.lpAccountsAssetsGroup=function(e){function t(e,t){var n=['<div accordion-group="accordion-group" is-open="group.isOpen" ng-show="preferences.showGroups && group.accounts.length > 0">','<div accordion-heading="accordion-heading">','<span lp-i18n="{{ group.title }}"></span>',"<i class=\"fa\" ng-class=\"{ 'fa-caret-up': group.isOpen, 'fa-caret-down': !group.isOpen }\"></i>",'<span ng-show="preferences.showTotals" class="group-totals pull-right"','lp-amount="groupTotal.totalBalance"','hide-trailing-zeroes="true"','lp-amount-currency="groupTotal.currency"></span>',"</div>",'<div lp-accounts-assets-list=""',' select-account="selectAccount({account: account, groupCode: group.code})"',' group="group"',' preferences="preferences"',' selected-account-id="selectedAccountId">',"</div>","</div>"].join(""),o=['<div class="panel-heading panel-round clearfix cursor-pointer"','ng-show="preferences.showGroups && group.accounts.length > 0" tabindex="0"','ng-click="group.isCollapsed = !group.isCollapsed">','<span class="pull-left" lp-i18n="{{ group.title }}"></span>','<span class="pull-right caret"></span>','<span ng-show="preferences.showTotals" class="group-totals pull-right"','lp-amount="groupTotal.totalBalance"','hide-trailing-zeroes="true"','lp-amount-currency="groupTotal.currency"></span>',"</div>",'<div lp-accounts-assets-list="" select-account="selectAccount({account: account, groupCode: group.code})"',' group="group"',' preferences="preferences"',' selected-account-id="selectedAccountId"',' ng-hide="group.isCollapsed">',"</div>"].join("");return t&&"true"===t.accordionEnabled?n:o}function n(t){t.groupTotal=e.getGroupTotal(t.group,t.preferences.defaultBalance)}return{restrict:"AE",scope:{group:"=",preferences:"=",selectedAccountId:"=",selectAccount:"&"},template:t,link:n}},e.lpAccountsAssetsGroup.$inject=["lpAccountsUtils"]}.call(t,n,t,e),!(void 0!==o&&(e.exports=o))},function(e,t,n){var o;o=function(require,e,t){"use strict";e.lpAccountsAssetsList=function(){function e(){return['<ul class="list-group">','<li class="list-group-item panel-body cursor-pointer"','tabindex="0" role="button"','ng-repeat="account in group.accounts"','on-select="selectAccount({account: account, groupCode: group.code})"','ng-class="{ selected: selectedAccountId == account.id }">','<span class="lp-line-item-arrow">','<i class="lp-icon lp-icon-angle-right"></i>',"</span>",'<div lp-accounts-assets-account="" ',' account="account"',' group="group"',' selected-account-id="selectedAccountId"',' preferences="preferences">',"</div>","</li>","</ul>"].join("")}return{restrict:"AE",scope:{group:"=",selectedAccountId:"=",preferences:"=",selectAccount:"&"},template:e}}}.call(t,n,t,e),!(void 0!==o&&(e.exports=o))},function(e,t,n){var o;o=function(require,e,t){"use strict";e.lpAccountsAssetsAccount=function(){function e(){return['<div class="grouped-account clearfix" ng-class="{ \'bg-danger\': account.alerts }">',"<span ng-if=\"group.code === 'card'\"",'class="account-icon lp-icon lp-icon-credit-card pull-left"','ng-style="{ color: account.iconColor }"></span>','<p ng-if="group.code !== \'card\'" ng-show="preferences.showAccountHolderName">{{ account.holder }}</p>','<p class="pull-left">',"<span>",'{{ account.alias }} <span ng-if="account.shortReferenceId">({{ account.shortReferenceId }})</span>',"</span>","</p>",'<span ng-if="preferences.defaultBalance !== \'current\'" class="account-balance pull-right"','lp-amount="account.availableBalance" lp-amount-currency="account.currency"','hide-trailing-zeroes="true" ng-model="account"></span>','<span ng-if="preferences.defaultBalance === \'current\'" class="account-balance pull-right"','lp-amount="account.bookedBalance" lp-amount-currency="account.currency"','hide-trailing-zeroes="true" ng-model="account"></span>','<p ng-if="group.code !== \'card\'" ng-show="preferences.showAccountType">{{ account.product }}</p>','<p ng-if="group.code !== \'card\'" ng-show="preferences.showAccountHolderCategory">',"{{ account.relationship }}","</p>","</div>"].join("")}function t(e,t,n){}return{restrict:"AE",scope:{account:"=",group:"=",selectedAccountId:"=",preferences:"="},template:e,link:t}}}.call(t,n,t,e),!(void 0!==o&&(e.exports=o))},function(e,t,n){var o;o=function(require,e,t){"use strict";e.onSelect=function(e){return{restrict:"A",compile:function(t,n){var o=e(n.onSelect);return function(e,t){t.on("click keydown",function(t){("click"===t.type||13===t.which||32===t.which)&&(t.preventDefault(),t.stopPropagation(),e.$apply(function(){o(e,{$event:t})}))})}}}},e.onSelect.$inject=["$parse"]}.call(t,n,t,e),!(void 0!==o&&(e.exports=o))},function(e,t,n){var o;o=function(require,e,t){"use strict";var o=n(2).utils,c=function(e){return e.accountServicer&&e.accountServicer.id},s=function(e){return!c(e)||e.accountServicer.display},r=function(e){var t=o.clone(e);return (t.availableBalance=parseFloat(e.availableBalance), t.bookedBalance=parseFloat(e.bookedBalance), t)},a=function(e){var t=o.cloneDeep(e);return (o.forEach(t,function(e){e.accounts=o(e.accounts).chain().filter(s).map(r).value()}), t)},i=function(e){var t={internal:{},external:{}};return (o.forOwn(e,function(e,n){t.internal[n]=[],t.external[n]=[],o.forEach(e,function(e){c(e)?t.external[n].push(e):t.internal[n].push(e)})}), t)},l=function(e,t){return o.map(e,function(e,n){var c=o.find(t,function(t,n){return e.code===n});return{title:e.defaultTitle,code:e.code,accounts:c||[],isCollapsed:!1,isOpen:!n}})},u=function(e,t){this.bus=e,this.resource=t,this.accounts=null,this.groups=null,this.assetCollection=[],this.error=!1,this.bus.subscribe("launchpad-retail:ACCOUNT_BALANCE_CHANGED",function(e){null!==this.accounts&&this.load()}.bind(this))};u.$inject=["lpCoreBus","$resource"],u.prototype.config=function(e){e.assetsEndpoint=o.resolvePortalPlaceholders(e.assetsEndpoint),this.assetsResource=this.resource(e.assetsEndpoint),this.groupsEnabled=!!e.groupsEndpoint,this.groupByInternalExternal=!!e.groupByInternalExternal,this.groupsEnabled&&(e.groupsEndpoint=o.resolvePortalPlaceholders(e.groupsEndpoint),this.groupsResource=this.resource(e.groupsEndpoint)),this.filterByGroupCode=e.groupCodeFilter},u.prototype.load=function(){return this.assetsResource.get().$promise.then(function(e){if(this.accounts=e,this.bus.publish("launchpad-retail.accountsLoaded",e["current-account"]),this.groupsEnabled)return this.groupsResource.query().$promise.then(function(e){if(this.groups=e,this.groupByInternalExternal){var t=i(this.accounts);this.internalCollection=a(l(this.groups,t.internal)),this.externalCollection=a(l(this.groups,t.external))}else this.assetCollection=a(l(this.groups,this.accounts)),this.assetCollectionFlat=this.assetCollection.reduce(function(e,t){return (t.accounts.forEach(function(e,n){e.code=t.code,0===n&&(e.groupTitle=t.title,e.groupAccountsCount=t.accounts.length)}), e.concat(t.accounts))},[]);return this.accounts}.bind(this));if(this.groupByInternalExternal){var t=i(this.accounts);this.internalCollection=a(t.internal),this.externalCollection=a(t.external)}else this.assetCollection=a(this.accounts);return (o.forEach(this.accounts,this.configurePreviousBalanceDelta), this.accounts)}.bind(this))},u.prototype.getPending=function(e){return e.bookedBalance-e.availableBalance},u.prototype.configurePreviousBalanceDelta=function(e){this.previousBalances?(this.previousBalances[e.id]>e.availableBalance?e.delta=-1:this.previousBalances[e.id]<e.availableBalance?e.delta=1:e.delta=0,this.previousBalances[e.id]=e.availableBalance):(this.previousBalances=[],e.delta=0,this.previousBalances[e.id]=e.availableBalance)},u.prototype.hasExternalAccounts=function(){return!(!this.externalCollection||!o(this.externalCollection).chain().values().pluck("accounts").flatten().value().length)},e.AssetsModel=u}.call(t,n,t,e),!(void 0!==o&&(e.exports=o))},function(e,t,n){var o;o=function(require,e,t){"use strict";var o=n(2).utils;e.lpAccountsUtils=function(){return{getGroupTotal:function(e,t){var n,c=0;return (o.forEach(e.accounts,function(e){c+=e[t+"Balance"],n=e.currency}), {totalBalance:c,currency:n})}}}}.call(t,n,t,e),!(void 0!==o&&(e.exports=o))},function(e,t,n){var o;o=function(require,e,t){"use strict";function o(e,t,n,o,r,a,i){this.layout=n.getPreference("widgetLayout"),this.getGroupTotal=function(e){return i.getGroupTotal(e,this.preferences.defaultBalanceMapped)},this.scope=e,this.bus=a,this.widget=n,this.model=o,this.widget.addEventListener("preferencesSaved",this.refreshWidget.bind(this)),this.bus.subscribe("lpDataFreshnessRefresh",function(){c.safeApply(this.scope,this.load.bind(this))}.bind(this)),this.bus.subscribe("launchpad-retail.accountSelected",function(t){c.safeApply(e,function(){this.model.selected=t.accountId}.bind(this))}.bind(this)),r.enable(t).rule({"max-width":200,then:s(e,"lp-tile-size")}).rule({"min-width":201,"max-width":350,then:s(e,"lp-small-size")}).rule({"min-width":351,"max-width":600,then:s(e,"lp-normal-size")}).rule({"min-width":601,then:s(e,"lp-large-size")}),this.config(),this.load()}o.$inject=["$scope","$rootElement","lpWidget","AssetsModel","lpUIResponsive","lpCoreBus","lpAccountsUtils"];var c=n(2).utils,s=function(e,t){return function(){c.safeApply(e,function(){e.responsiveClass=t})}},r={current:"booked",available:"available"};o.prototype.config=function(){this.title=this.widget.getPreference("title"),this.preferences={showGroups:c.parseBoolean(this.widget.getPreference("showGroups")),showTotals:c.parseBoolean(this.widget.getPreference("showGroupTotals")),showAccountHolderName:c.parseBoolean(this.widget.getPreference("showAccountHolderName")),showAccountType:c.parseBoolean(this.widget.getPreference("showAccountType")),showAccountHolderCategory:c.parseBoolean(this.widget.getPreference("showAccountHolderCategory")),groupByInternalExternal:c.parseBoolean(this.widget.getPreference("groupByInternalExternal")),showAllFinances:c.parseBoolean(this.widget.getPreference("showAllFinances")),defaultBalance:this.widget.getPreference("preferredBalanceView")||this.widget.getPreferenceFromParents("preferredBalanceView")||"current",internalIsOpen:!0,externalIsOpen:!1},this.preferences.defaultBalanceMapped=r[this.preferences.defaultBalance]||this.preferences.defaultBalance,this.model.config({assetsEndpoint:this.widget.getResolvedPreference("accountsDataSrc"),groupsEndpoint:this.widget.getResolvedPreference("groupsDataSrc"),groupByInternalExternal:this.preferences.groupByInternalExternal})},o.prototype.load=function(){this.model.loadingNow=!0,this.model.noAccountsAvailable=!1,this.model.load().then(function(){this.model.loadingNow=!1,this.model.accounts&&(this.model.accounts["current-account"]&&this.model.accounts["current-account"].length||this.model.accounts.card&&this.model.accounts.card.length||this.model.accounts["current-portfolio"]&&this.model.accounts["current-portfolio"].length)||(this.model.noAccountsAvailable=!0),this.bus.subscribe("account-details:account:update",function(e){c.safeApply(this.scope,this.updateAccountDetails.bind(this,e))}.bind(this))}.bind(this))["finally"](function(){this.model.loadingNow=!1}.bind(this))["catch"](function(e){throw this.model.error="Failed to load accounts."}.bind(this))},o.prototype.refreshWidget=function(){this.widget.refreshHTML(),this.load()},o.prototype.updateAccountDetails=function(e){var t=c(this.model.assetCollectionFlat).findWhere({id:e.id});t&&c.assign(t,e)},o.prototype.selectAccount=function(e,t){this.model.selected=e.id,"portfolio"===e.type?this.bus.publish("launchpad-retail.portfolioSelected",e):t&&"card"===t?(this.bus.publish("launchpad-retail.openCardManagement"),this.bus.publish("launchpad-retail.cardSelected",{account:e})):this.bus.publish("launchpad-retail.accountSelected",{accountId:e.id,originType:"accounts"},!0)},o.prototype.payForAccount=function(e,t){e.stopPropagation(),this.bus.publish("launchpad-retail.requestMoneyTransfer",{accountId:t})},o.prototype.openAllFinances=function(){this.bus.publish("launchpad-retail.accountSelected",{accountId:"000-000-000",originType:"accounts"})},e.MainCtrl=o}.call(t,n,t,e),!(void 0!==o&&(e.exports=o))}])});