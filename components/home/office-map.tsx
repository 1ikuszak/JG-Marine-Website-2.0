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

      // Initialize map centered on Poland
      const map = L.map(mapRef.current, {
        center: [52.4, 18.5],
        zoom: 6,
        zoomControl: true,
        scrollWheelZoom: false,
        attributionControl: true,
      });

      mapInstanceRef.current = map;

      // CartoDB Positron — clean light tiles with no API key required
      L.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
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
            <div style="font-size: 11px; font-weight: 700; color: #005E8E; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 4px;">
              ${isHQ ? "HEAD OFFICE" : office.type.toUpperCase()}
            </div>
            <div style="font-size: 15px; font-weight: 700; color: #0D0D0D; margin-bottom: 6px; line-height: 1.2;">
              ${office.tagline}
            </div>
            <div style="font-size: 12px; color: #475569; margin-bottom: 8px; line-height: 1.5;">
              ${office.address.fullAddress}
            </div>
            <div style="border-top: 1px solid #e2e8f0; padding-top: 8px;">
              <a href="tel:${office.contact.phone.replace(/\s/g, "")}" style="
                display: inline-flex;
                align-items: center;
                gap: 6px;
                font-size: 13px;
                font-weight: 600;
                color: #005E8E;
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
        .jg-marine-popup .leaflet-popup-content-wrapper {
          border-radius: 10px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.12);
          border: 1px solid #e2e8f0;
          padding: 0;
        }
        .jg-marine-popup .leaflet-popup-content {
          margin: 14px 16px;
        }
        .jg-marine-popup .leaflet-popup-tip-container {
          margin-top: -1px;
        }
        .leaflet-container {
          font-family: system-ui, sans-serif;
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
      className="w-full rounded-xl border border-border overflow-hidden"
      style={{ height: "420px" }}
      aria-label="Interactive map showing JG Marine office locations in Poland"
    />
  );
}
