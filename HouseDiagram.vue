<template>
  <!-- Hausschnitt: woher die Wärme kommen kann -->
  <svg viewBox="0 0 560 420" role="img" aria-labelledby="hs-t hs-d">
    <title id="hs-t">Haus im Schnitt mit drei Wärmequellen</title>
    <desc id="hs-d">
      Ein Haus mit Solarmodulen auf dem Dach, einer Luft-Wasser-Wärmepumpe aussen, einer Erdsonde
      im Boden und einem Pelletkessel im Keller.
    </desc>
    <rect x="0" y="0" width="560" height="420" fill="#1d3340" rx="8" />
    <!-- Sonne -->
    <circle cx="478" cy="62" r="26" fill="#f2b400" />
    <g stroke="#f2b400" stroke-width="3" stroke-linecap="round">
      <path d="M478 22v10M478 92v10M438 62h10M508 62h10M450 34l7 7M499 83l7 7M506 34l-7 7M457 83l-7 7" />
    </g>
    <!-- Boden -->
    <rect x="0" y="262" width="560" height="158" fill="#2c4a3b" />
    <rect x="0" y="262" width="560" height="4" fill="#4f7a62" />
    <!-- Haus -->
    <path d="M96 262V150L216 72l120 78v112z" fill="#f5f7f6" />
    <path d="M84 156L216 64l132 92" fill="none" stroke="#f5f7f6" stroke-width="10" stroke-linejoin="round" stroke-linecap="round" />
    <!-- Solarmodule -->
    <g fill="#2e6f9e" stroke="#9cc7e6" stroke-width="2">
      <path d="M168 104l34-24 8 6-34 24z" />
      <path d="M204 128l34-24 8 6-34 24z" />
    </g>
    <!-- Fenster und Tür -->
    <rect x="128" y="176" width="40" height="36" fill="#1d3340" />
    <rect x="248" y="176" width="40" height="36" fill="#1d3340" />
    <rect x="196" y="204" width="40" height="58" fill="#3f5a4a" />
    <!-- Keller -->
    <rect x="96" y="262" width="240" height="72" fill="#e3e9e6" />
    <!-- Pelletkessel -->
    <rect x="116" y="278" width="62" height="48" rx="4" fill="#16262f" />
    <rect x="126" y="288" width="42" height="12" fill="#f2b400" />
    <circle cx="147" cy="315" r="4" fill="#f2b400" />
    <rect x="196" y="286" width="54" height="40" rx="4" fill="#4a5c66" />
    <text x="223" y="311" font-family="Inter,sans-serif" font-size="12" fill="#fff" text-anchor="middle">Speicher</text>
    <!-- Aussengerät -->
    <rect x="372" y="222" width="76" height="40" rx="4" fill="#cfd8dc" />
    <circle cx="400" cy="242" r="13" fill="none" stroke="#16262f" stroke-width="3" />
    <path d="M400 232v20M390 242h20" stroke="#16262f" stroke-width="2.5" />
    <path d="M336 244h36" stroke="#f2b400" stroke-width="4" stroke-linecap="round" />
    <!-- Luftpfeile -->
    <g stroke="#9cc7e6" stroke-width="3" stroke-linecap="round" fill="none">
      <path d="M470 210c-14 0-20 6-30 6" />
      <path d="M476 236c-14 0-20 4-28 4" />
    </g>
    <!-- Erdsonde -->
    <path d="M300 334V396" stroke="#f2b400" stroke-width="5" stroke-linecap="round" />
    <path d="M312 334V396" stroke="#f2b400" stroke-width="5" stroke-linecap="round" />
    <path d="M300 396h12" stroke="#f2b400" stroke-width="5" stroke-linecap="round" />
    <path d="M336 300h8c0 0 0 34-32 34" fill="none" stroke="#f2b400" stroke-width="4" />
    <!-- Beschriftung -->
    <g font-family="Inter,sans-serif" font-size="14" font-weight="600" fill="#fff">
      <text x="372" y="206">Luft</text>
      <text x="330" y="390">Erde</text>
      <text x="116" y="356">Holz</text>
      <text x="228" y="52" text-anchor="middle" fill="#9cc7e6">Sonne</text>
    </g>
  </svg>
</template>
