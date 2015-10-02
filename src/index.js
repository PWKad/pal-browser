import {initializePAL} from 'aurelia-pal';
import {PLATFORM} from './platform';
import {FEATURE} from './feature';
import {DOM} from './dom';
import {ensureCustomEvent} from './custom-event';
import {ensureFunctionName} from './function-name';
import {ensureHTMLTemplateElement} from './html-template-element';
import {ensureElementMatches} from './element-matches';
import {ensureClassList} from './class-list';

export function initialize(): void {
  ensureCustomEvent();
  ensureFunctionName();
  ensureHTMLTemplateElement();
  ensureElementMatches();
  ensureClassList();

  initializePAL(PLATFORM, FEATURE, DOM);
}