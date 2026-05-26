// SVG icon library — all 16x16 viewBox
const Icons = {
  cursor: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 2l10 6-5 1.5L6.5 14 3 2z"/></svg>`,
  move: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2v12M2 8h12M5 5L2 8l3 3M11 5l3 3-3 3M5 5L8 2l3 3M5 11l3 3 3-3"/></svg>`,
  rotate: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M13.5 8a5.5 5.5 0 11-1.34-3.6M13.5 2v3.5H10"/></svg>`,
  scale: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="4" height="4" rx="1"/><rect x="10" y="2" width="4" height="4" rx="1"/><path d="M6 8h2M8 4h2M10 4L6 8"/></svg>`,
  cube: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M8 2l5 3v6l-5 3-5-3V5z"/><path d="M8 2v12M3 5l5 3 5-3"/></svg>`,
  sphere: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><circle cx="8" cy="8" r="5.5"/><path d="M2.5 8h11M8 2.5C6 5 6 11 8 13.5M8 2.5C10 5 10 11 8 13.5"/></svg>`,
  cylinder: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><ellipse cx="8" cy="4" rx="5" ry="2"/><path d="M3 4v8c0 1.1 2.2 2 5 2s5-.9 5-2V4"/></svg>`,
  duplicate: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="5" width="8" height="8" rx="1.5"/><path d="M3 11V3h8"/></svg>`,
  delete: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M2 4h12M5 4V3h6v1M6 7v5M10 7v5M3 4l1 9h8l1-9"/></svg>`,
  reset: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 8a5 5 0 105-5H5M3 3v3h3"/></svg>`,
  eye: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M1 8s2.5-5 7-5 7 5 7 5-2.5 5-7 5-7-5-7-5z"/><circle cx="8" cy="8" r="2"/></svg>`,
  lock: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="7" width="10" height="7" rx="1.5"/><path d="M5 7V5a3 3 0 016 0v2"/></svg>`,
  plus: `<svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M8 3v10M3 8h10"/></svg>`,
}

export function icon(name, size = 14) {
  const svg = Icons[name] || Icons.cube
  return svg.replace('viewBox', `width="${size}" height="${size}" viewBox`)
}

export const TOOLS = [
  { id: 'select',     label: 'Select',       key: 'Q', icon: 'cursor' },
  { id: 'move',       label: 'Move',         key: 'W', icon: 'move' },
  { id: 'rotate',     label: 'Rotate',       key: 'E', icon: 'rotate' },
  { id: 'scale',      label: 'Scale',        key: 'R', icon: 'scale' },
  { id: 'sep1',       type: 'sep' },
  { id: 'add-cube',   label: 'Add Cube',     key: 'C', icon: 'cube' },
  { id: 'add-sphere', label: 'Add Sphere',   key: 'S', icon: 'sphere' },
  { id: 'add-cylinder', label: 'Add Cylinder', key: 'Y', icon: 'cylinder' },
  { id: 'sep2',       type: 'sep' },
  { id: 'duplicate',  label: 'Duplicate',    key: 'D', icon: 'duplicate' },
  { id: 'delete',     label: 'Delete',       key: 'X', icon: 'delete', danger: true },
  { id: 'sep3',       type: 'sep' },
  { id: 'reset-view', label: 'Reset View',   key: 'F', icon: 'reset' },
]
