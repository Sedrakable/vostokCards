export const onClickNavigate = (event: any, path: string) => {
  if (event.metaKey || event.ctrlKey) {
    return;
  }
  event.preventDefault();
  window.history.pushState({}, "", path);

  const navEvent = new PopStateEvent("popstate");
  window.dispatchEvent(navEvent);
};
