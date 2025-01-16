"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plane, Home, Plus, Minus } from 'lucide-react'

export default function DatacenterMap() {
  const [zoom, setZoom] = useState(1)

  // Datacenter coordinates (approximate)
  const datacenters = [
    { id: 1, x: "25%", y: "30%" },
    { id: 2, x: "35%", y: "28%" },
    { id: 3, x: "45%", y: "25%" },
    { id: 4, x: "55%", y: "28%" },
    { id: 5, x: "65%", y: "25%" },
  ]

  // Create path data for the curved lines
  const paths = datacenters.slice(0, -1).map((start, i) => {
    const end = datacenters[i + 1]
    const midX = (parseInt(start.x) + parseInt(end.x)) / 2
    return `M ${start.x} ${start.y} Q ${midX}% 45% ${end.x} ${end.y}`
  })

  const countries = [
    { name: "United States", locations: "10 locations", flag: "🇺🇸" },
    { name: "Germany", locations: "5 locations", flag: "🇩🇪" },
    { name: "France", locations: "4 locations", flag: "🇫🇷" },
    { name: "Belgium", locations: "14 locations", flag: "🇧🇪" },
    { name: "England", locations: "14 locations", flag: "🏴󠁧󠁢󠁥󠁮󠁧󠁿" },
  ]

  return (
    <div className="max-w-6xl mx-auto p-8">
      <div className="text-center mb-8">
        <span className="text-purple-600 text-sm font-medium">Explore our Locations</span>
        <h1 className="text-2xl font-bold mt-2">Datacenter Locations</h1>
      </div>

      <div className="relative aspect-[2/1] mb-8 bg-white rounded-lg">
        {/* Controls */}
        <div className="absolute left-4 top-4 flex flex-col gap-2">
          <button className="p-2 bg-white rounded-md shadow hover:bg-gray-50">
            <Home className="w-4 h-4" />
          </button>
          <button 
            className="p-2 bg-white rounded-md shadow hover:bg-gray-50"
            onClick={() => setZoom(z => Math.min(z + 0.2, 2))}
          >
            <Plus className="w-4 h-4" />
          </button>
          <button 
            className="p-2 bg-white rounded-md shadow hover:bg-gray-50"
            onClick={() => setZoom(z => Math.max(z - 0.2, 0.5))}
          >
            <Minus className="w-4 h-4" />
          </button>
        </div>

        {/* Map Container */}
        <div className="relative w-full h-full overflow-hidden">
          {/* World Map Background */}
          <div
            className="absolute inset-0 bg-contain bg-no-repeat bg-center"
            style={{ 
              backgroundImage: 'url("https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-16%20at%2013.49.41_ee6ad334.jpg-q2fR8Z33o6prukbXA1JWq2jYT70Bk9.jpeg")',
              transform: `scale(${zoom})`,
              transition: 'transform 0.3s ease-out'
            }}
          />

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full">
            {paths.map((path, i) => (
              <path
                key={i}
                d={path}
                fill="none"
                stroke="rgba(124, 58, 237, 0.2)"
                strokeWidth="2"
              />
            ))}
          </svg>

          {/* Datacenter Markers */}
          {datacenters.map((dc, i) => (
            <div
              key={i}
              className="absolute w-4 h-4 transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: dc.x, top: dc.y }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-purple-500/20 rounded-full animate-ping" />
                <div className="relative w-3 h-3 bg-purple-600 rounded-full" />
              </div>
            </div>
          ))}

          {/* Animated Airplane */}
          <motion.div
            className="absolute"
            animate={{
              x: datacenters.map(dc => dc.x),
              y: datacenters.map(dc => dc.y),
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ x: "-50%", y: "-50%" }}
          >
            <Plane className="text-purple-600 w-6 h-6" />
          </motion.div>
        </div>
      </div>

      {/* Country List */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
        {countries.map((country) => (
          <div key={country.name} className="flex flex-col items-center space-y-2">
            <span className="text-2xl">{country.flag}</span>
            <div className="text-sm font-medium">{country.name}</div>
            <div className="text-xs text-gray-500">{country.locations}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

