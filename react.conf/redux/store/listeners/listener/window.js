import action from "../../../actions/all";

export default store => {
  trackWindowSizeState(store);
  trackMousedownState(store);
  trackMouseupState(store);
};

function trackWindowSizeState(store) {
  store.dispatch(
    action.windowResized({
      inner: { width: window.innerWidth, height: window.innerHeight },
      outer: { width: window.outerWidth, height: window.outerHeight }
    })
  );
  window.addEventListener("resize", event => {
    store.dispatch(
      action.windowResized({
        ...store.getState().state.window,
        inner: { width: window.innerWidth, height: window.innerHeight },
        outer: { width: window.outerWidth, height: window.outerHeight }
      })
    );
  });
}

function trackMousedownState(store) {
  store.dispatch(action.mousedown({ ...store.getState().state.mouse }, false));
  window.addEventListener("mousedown", event => {
    const {
      altKey,
      bubbles,
      button,
      buttons,
      cancelBubble,
      cancelable,
      clientX,
      clientY,
      composed,
      ctrlKey,
      currentTarget,
      defaultPrevented,
      detail,
      eventPhase,
      fromElement,
      isTrusted,
      layerX,
      layerY,
      metaKey,
      movementX,
      movementY,
      offsetX,
      offsetY,
      pageX,
      pageY,
      path,
      relatedTarget,
      returnValue,
      screenX,
      screenY,
      shiftKey,
      sourceCapabilities,
      srcElement,
      target,
      timeStamp,
      toElement,
      type,
      view,
      which,
      x,
      y,
      __proto__
    } = event;
    store.dispatch(
      action.mousedown(
        { ...store.getState().state.mouse, up: false },
        {
          altKey,
          bubbles,
          button,
          buttons,
          cancelBubble,
          cancelable,
          clientX,
          clientY,
          composed,
          ctrlKey,
          currentTarget,
          defaultPrevented,
          detail,
          eventPhase,
          fromElement,
          isTrusted,
          layerX,
          layerY,
          metaKey,
          movementX,
          movementY,
          offsetX,
          offsetY,
          pageX,
          pageY,
          path,
          relatedTarget,
          returnValue,
          screenX,
          screenY,
          shiftKey,
          sourceCapabilities,
          srcElement,
          target,
          timeStamp,
          toElement,
          type,
          view,
          which,
          x,
          y,
          __proto__
        }
      )
    );
  });
}

function trackMouseupState(store) {
  store.dispatch(action.mouseup({ ...store.getState().state.mouse }, false));
  window.addEventListener("mouseup", event => {
    const {
      altKey,
      bubbles,
      button,
      buttons,
      cancelBubble,
      cancelable,
      clientX,
      clientY,
      composed,
      ctrlKey,
      currentTarget,
      defaultPrevented,
      detail,
      eventPhase,
      fromElement,
      isTrusted,
      layerX,
      layerY,
      metaKey,
      movementX,
      movementY,
      offsetX,
      offsetY,
      pageX,
      pageY,
      path,
      relatedTarget,
      returnValue,
      screenX,
      screenY,
      shiftKey,
      sourceCapabilities,
      srcElement,
      target,
      timeStamp,
      toElement,
      type,
      view,
      which,
      x,
      y,
      __proto__
    } = event;
    store.dispatch(
      action.mouseup(
        { ...store.getState().state.mouse, down: false },
        {
          altKey,
          bubbles,
          button,
          buttons,
          cancelBubble,
          cancelable,
          clientX,
          clientY,
          composed,
          ctrlKey,
          currentTarget,
          defaultPrevented,
          detail,
          eventPhase,
          fromElement,
          isTrusted,
          layerX,
          layerY,
          metaKey,
          movementX,
          movementY,
          offsetX,
          offsetY,
          pageX,
          pageY,
          path,
          relatedTarget,
          returnValue,
          screenX,
          screenY,
          shiftKey,
          sourceCapabilities,
          srcElement,
          target,
          timeStamp,
          toElement,
          type,
          view,
          which,
          x,
          y,
          __proto__
        }
      )
    );
  });
}
