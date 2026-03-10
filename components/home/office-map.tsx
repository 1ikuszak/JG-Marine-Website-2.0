"use client";

import { useEffect, useRef } from "react";
import type { Map as LeafletMap } from "leaflet";
import { OFFICES } from "@/config";

// Leaflet CSS must be imported in a client component
import "leaflet/dist/leaflet.css";

export default function OfficeMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    let style: HTMLStyleElement | null = null;

    // Lazy-import leaflet to avoid SSR issues
    import("leaflet").then((L) => {
      if (!mapRef.current || mapInstanceRef.current) return;

      // Prevent broken default PNG icons in Next.js (webpack can't resolve relative paths in leaflet.css)
      delete (L.Icon.Default.prototype as unknown as Record<string, unknown>)._getIconUrl;
      L.Icon.Default.mergeOptions({ iconUrl: "", iconRetinaUrl: "", shadowUrl: "" });

      // Initialize map centered on Poland
      const map = L.map(mapRef.current, {
        center: [52.4, 18.5],
        zoom: 6,
        zoomControl: true,
        scrollWheelZoom: false,
        attributionControl: true,
      });

      mapInstanceRef.current = map;

      // CartoDB Dark Matter — dark tiles, no API key required
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
        {
          attribution:
            '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>',
          subdomains: "abcd",
          maxZoom: 19,
        }
      ).addTo(map);

      // Custom branded marker SVG (navy circle with white anchor)
      const createMarkerIcon = (type: "headquarters" | "branch" | "office") => {
        const isHQ = type === "headquarters";
        const bg = isHQ ? "#005E8E" : "#6B8FA3";
        const size = isHQ ? 44 : 36;
        const svgSize = isHQ ? 20 : 16;
        return L.divIcon({
          className: "",
          html: `
            <div style="
              width: ${size}px;
              height: ${size}px;
              background: ${bg};
              border: 3px solid white;
              border-radius: 50%;
              box-shadow: 0 2px 8px rgba(0,0,0,0.35);
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
            ">
              <svg xmlns="http://www.w3.org/2000/svg" width="${svgSize}" height="${svgSize}" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2L12 22"/>
                <path d="M5 8h14"/>
                <path d="M5 8l7 14 7-14"/>
                <circle cx="12" cy="5" r="3"/>
              </svg>
              <div style="
                position: absolute;
                bottom: -8px;
                left: 50%;
                transform: translateX(-50%);
                width: 0;
                height: 0;
                border-left: 6px solid transparent;
                border-right: 6px solid transparent;
                border-top: 8px solid ${bg};
              "></div>
            </div>
          `,
          iconSize: [size, isHQ ? 52 : 44],
          iconAnchor: [isHQ ? 22 : 18, isHQ ? 52 : 44],
          popupAnchor: [0, isHQ ? -54 : -46],
        });
      };

      // Add markers for each office
      OFFICES.forEach((office) => {
        const isHQ = office.type === "headquarters";
        const marker = L.marker([office.coordinates.lat, office.coordinates.lng], {
          icon: createMarkerIcon(office.type),
        });

        const popupContent = `
          <div style="font-family: system-ui, sans-serif; min-width: 200px; padding: 4px;">
            <div style="font-size: 11px; font-weight: 700; color: #6BADD4; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px;">
              ${isHQ ? "HEAD OFFICE" : office.type.toUpperCase()}
            </div>
            <div style="font-size: 15px; font-weight: 700; color: #F4F9F6; margin-bottom: 6px; line-height: 1.2;">
              ${office.tagline}
            </div>
            <div style="font-size: 12px; color: rgba(244,249,246,0.55); margin-bottom: 8px; line-height: 1.5;">
              ${office.address.fullAddress}
            </div>
            <div style="border-top: 1px solid rgba(255,255,255,0.12); padding-top: 8px;">
              <a href="tel:${office.contact.phone.replace(/\s/g, "")}" style="
                display: inline-flex;
                align-items: center;
                gap: 6px;
                font-size: 13px;
                font-weight: 600;
                color: #6BADD4;
                text-decoration: none;
              ">${office.contact.phone}</a>
            </div>
          </div>
        `;

        marker
          .addTo(map)
          .bindPopup(popupContent, {
            maxWidth: 260,
            className: "jg-marine-popup",
          });
      });

      // Custom popup styles injected once
      style = document.createElement("style");
      style.textContent = `
        .leaflet-container {
          font-family: system-ui, sans-serif;
          background: #0D1E2C;
        }
        .leaflet-tile-pane {
          filter: hue-rotate(185deg) saturate(1.3) brightness(1.05);
        }
        .jg-marine-popup .leaflet-popup-content-wrapper {
          background: #0D1F22;
          border-radius: 10px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.5);
          border: 1px solid rgba(255,255,255,0.12);
          padding: 0;
        }
        .jg-marine-popup .leaflet-popup-tip {
          background: #0D1F22;
        }
        .jg-marine-popup .leaflet-popup-content {
          margin: 14px 16px;
          color: #F4F9F6;
        }
        .jg-marine-popup .leaflet-popup-tip-container {
          margin-top: -1px;
        }
        .jg-marine-popup .leaflet-popup-close-button {
          color: rgba(244,249,246,0.5) !important;
        }
        .jg-marine-popup .leaflet-popup-close-button:hover {
          color: #F4F9F6 !important;
        }
        .leaflet-control-zoom a {
          background: #21383D !important;
          color: #F4F9F6 !important;
          border-color: rgba(255,255,255,0.15) !important;
        }
        .leaflet-control-zoom a:hover {
          background: #2d4f56 !important;
        }
        .leaflet-control-attribution {
          background: rgba(13,31,34,0.8) !important;
          color: rgba(244,249,246,0.4) !important;
        }
        .leaflet-control-attribution a {
          color: rgba(244,249,246,0.5) !important;
        }
        .leaflet-interactive:focus {
          outline: 2px solid #005E8E;
          outline-offset: 1px;
        }
      `;
      document.head.appendChild(style);
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
      if (style) {
        style.remove();
        style = null;
      }
    };
  }, []);

  return (
    <div
      ref={mapRef}
      className="w-full rounded-xl border border-border overflow-hidden min-h-[420px]"
      style={{ height: "100%" }}
      aria-label="Interactive map showing JG Marine office locations in Poland"
    />
  );
}
