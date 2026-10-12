(() => {
 const strip = document.getElementById('points');
 let frame = 0;
 function update() {
  frame = 0;
  const edge = strip.getBoundingClientRect();
  for (const item of strip.children) {
   const box = item.getBoundingClientRect();
   item.classList.toggle('edge-clipped', box.left < edge.left - 1 || box.right > edge.right + 1);
  }
 }
 function schedule() { if (!frame) frame = requestAnimationFrame(update); }
 strip.addEventListener('scroll', schedule, {passive:true});
 new ResizeObserver(schedule).observe(strip);
 new MutationObserver(schedule).observe(strip, {childList:true});
 schedule();
})();
