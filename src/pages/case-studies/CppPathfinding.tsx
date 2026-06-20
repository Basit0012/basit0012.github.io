import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowLeft, FileCode, CheckCircle2 } from 'lucide-react';
import { GlassCard } from '../../components/ui/GlassCard';

export const CppPathfinding: React.FC = () => {
  const codeSnippet = `#pragma once
#include <vector>
#include <queue>
#include <memory>
#include <cmath>

struct GridNode {
    int x, y;
    float gCost = 0.0f;
    float hCost = 0.0f;
    bool isObstacle = false;
    std::shared_ptr<GridNode> parent = nullptr;

    float getFCost() const { return gCost + hCost; }
};

class PathfindingEngine {
private:
    int width, height;
    std::vector<std::vector<std::shared_ptr<GridNode>>> grid;
    std::vector<std::shared_ptr<GridNode>> nodePool; // Node recycling pool to prevent heap fragmentation

public:
    PathfindingEngine(int w, int h) : width(w), height(h) {
        grid.resize(height, std::vector<std::shared_ptr<GridNode>>(width));
        for (int y = 0; y < height; ++y) {
            for (int x = 0; x < width; ++x) {
                grid[y][x] = std::make_shared<GridNode>(GridNode{x, y});
            }
        }
    }

    std::vector<std::shared_ptr<GridNode>> FindPath(int startX, int startY, int targetX, int targetY) {
        auto startNode = grid[startY][startX];
        auto targetNode = grid[targetY][targetX];

        auto compare = [](std::shared_ptr<GridNode> a, std::shared_ptr<GridNode> b) {
            return a->getFCost() > b->getFCost();
        };
        std::priority_queue<std::shared_ptr<GridNode>, std::vector<std::shared_ptr<GridNode>>, decltype(compare)> openSet(compare);
        std::vector<std::shared_ptr<GridNode>> closedSet;

        startNode->gCost = 0.0f;
        startNode->hCost = std::hypot(targetX - startX, targetY - startY);
        openSet.push(startNode);

        while (!openSet.empty()) {
            auto current = openSet.top();
            openSet.pop();

            if (current->x == targetX && current->y == targetY) {
                return RetracePath(startNode, targetNode);
            }

            closedSet.push_back(current);
            // Process grid neighbors and compute costs...
        }
        return {};
    }

private:
    std::vector<std::shared_ptr<GridNode>> RetracePath(std::shared_ptr<GridNode> start, std::shared_ptr<GridNode> target) {
        std::vector<std::shared_ptr<GridNode>> path;
        auto current = target;
        while (current != start && current != nullptr) {
            path.push_back(current);
            current = current->parent;
        }
        std::reverse(path.begin(), path.end());
        return path;
    }
};`;

  return (
    <div className="mx-auto max-w-5xl px-6 py-12 font-sans text-white bg-black">
      
      {/* Back to Projects */}
      <div className="mb-12">
        <RouterLink 
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-bold text-[#86868b] hover:text-white transition-colors duration-300 font-mono"
        >
          <ArrowLeft className="h-4 w-4" />
          BACK TO PROJECTS
        </RouterLink>
      </div>

      {/* Hero Header */}
      <div className="text-left mb-16 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <div>
          <span className="text-xs font-bold tracking-widest text-[#f5a972] uppercase font-mono">
            SYSTEM ARCHITECTURE SPEC SHEET
          </span>
          <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tighter mt-4 leading-none">
            C++ Navigation &amp; Pathfinding Simulation
          </h1>
          <h2 className="mt-4 text-lg sm:text-xl font-medium text-[#86868b]">
            Core Systems Programmer &bull; 2D Grid Routing Simulator
          </h2>
        </div>
        <a
          href="https://github.com/Basit0012/Cpp-Navigation-Pathfinding-Engine-Simulation"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-apple-blue shrink-0 text-center"
        >
          GitHub Repository
        </a>
      </div>

      {/* Main Image Block */}
      <div className="rounded-3xl overflow-hidden border border-white/10 bg-black aspect-[16/9] mb-16 shadow-2xl">
        <img
          src="/web-os-illustration.jpg"
          alt="C++ Pathfinding Simulator screenshot"
          className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
        />
      </div>

      {/* Specifications Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20 text-left">
        
        {/* Left Column: Details */}
        <div className="lg:col-span-8 flex flex-col gap-12">
          
          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-4">Project Overview</h3>
            <p className="text-sm sm:text-base text-[#86868b] leading-relaxed font-medium">
              Developed a lightweight, standalone 2D navigation grid simulation utilizing native C++ to demonstrate algorithmic pathfinding efficiency and game-loop execution constraints. 
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-6">Pipeline &amp; Algorithmic Details</h3>
            <div className="flex flex-col border-t border-white/10">
              
              <div className="py-6 border-b border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <span className="text-xs font-bold text-[#86868b] font-mono uppercase">2D NAVIGATION GRID</span>
                <span className="sm:col-span-2 text-xs sm:text-sm text-white/80 leading-relaxed font-medium">
                  Developed a lightweight 2D navigation grid simulation utilizing native C++ to demonstrate algorithmic pathfinding efficiency and game-loop execution constraints.
                </span>
              </div>

              <div className="py-6 border-b border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <span className="text-xs font-bold text-[#86868b] font-mono uppercase">SPATIAL NODE PARSING</span>
                <span className="sm:col-span-2 text-xs sm:text-sm text-white/80 leading-relaxed font-medium">
                  Implemented specialized data structures to manage spatial node parsing, preventing heap fragmentation and reducing overhead via runtime pointer recycling.
                </span>
              </div>

              <div className="py-6 border-b border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <span className="text-xs font-bold text-[#86868b] font-mono uppercase">DYNAMIC OBSTACLE MAPPING</span>
                <span className="sm:col-span-2 text-xs sm:text-sm text-white/80 leading-relaxed font-medium">
                  Engineered dynamic obstacle mapping constraints that recalculate real-time routing matrices instantly without stuttering core rendering threads.
                </span>
              </div>

            </div>
          </div>

          {/* SVG Visual Flow Chart */}
          <div className="flex flex-col gap-4">
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-4">Architecture &amp; Channel Flows</h3>
            <div className="flex justify-center w-full">
              <svg viewBox="0 0 800 350" className="w-full max-w-2xl h-auto border border-white/10 bg-black/40 rounded-2xl p-6">
                <style>{`
                  .box { fill: #111111; stroke: rgba(255,255,255,0.1); stroke-width: 1.5px; rx: 12px; }
                  .accent-box { fill: rgba(0,113,227,0.05); stroke: #0071e3; stroke-width: 1.5px; rx: 12px; }
                  .label { fill: #FFFFFF; font-family: monospace; font-size: 11px; font-weight: bold; text-anchor: middle; }
                  .muted-label { fill: #86868b; font-family: monospace; font-size: 9px; text-anchor: middle; }
                  .arrow { stroke: rgba(255,255,255,0.2); stroke-width: 1.5px; fill: none; stroke-dasharray: 4; }
                  .line { stroke: #0071e3; stroke-width: 2px; }
                `}</style>
                
                <rect x="50" y="50" width="160" height="70" className="box" />
                <text x="130" y="85" className="label">2D GRID MAP</text>
                <text x="130" y="102" className="muted-label">(Obstacle Layers)</text>

                <rect x="50" y="180" width="160" height="70" className="box" />
                <text x="130" y="215" className="label">GAME LOOP</text>
                <text x="130" y="232" className="muted-label">(Time delta &amp; Ticks)</text>

                <rect x="310" y="115" width="180" height="80" className="accent-box" />
                <text x="400" y="152" className="label">PATHFINDING CORE</text>
                <text x="400" y="170" className="muted-label">(A* Path Solver)</text>

                <rect x="590" y="115" width="160" height="80" className="box" />
                <text x="670" y="152" className="label">RENDER PIPELINE</text>
                <text x="670" y="170" className="muted-label">(Dynamic Draw Buffer)</text>

                <path d="M 210 85 L 260 85 L 260 140 L 310 140" className="arrow" />
                <path d="M 210 215 L 260 215 L 260 170 L 310 170" className="arrow" />
                <path d="M 490 155 L 590 155" className="line" />
                
                <text x="260" y="125" className="muted-label">Nodes Parse</text>
                <text x="540" y="145" className="muted-label">Tick Signals</text>
              </svg>
            </div>
          </div>

          {/* Code Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <FileCode className="h-5 w-5 text-[#f5a972]" />
                C++ A* Pathfinding Engine Snippet
              </h3>
              <span className="text-[10px] font-mono text-[#86868b]">C++</span>
            </div>
            
            <div className="rounded-2xl border border-white/10 bg-[#050505] p-6 font-mono text-xs overflow-x-auto leading-relaxed max-h-[380px]">
              <pre className="text-left text-white/70">
                <code>{codeSnippet}</code>
              </pre>
            </div>
          </div>

        </div>

        {/* Right Column: Spec Metrics */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          
          <GlassCard className="p-6 text-left border border-white/10 bg-[#050505] rounded-2xl">
            <h3 className="text-xs font-bold tracking-widest text-[#86868b] uppercase font-mono border-b border-white/10 pb-3">
              TECHNICAL SPECIFICATIONS
            </h3>
            <div className="flex flex-col gap-4 mt-6 text-xs font-mono">
              <div className="flex items-center justify-between">
                <span className="text-white/40">LANGUAGE</span>
                <span className="text-white font-bold">C++17</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/40">STANDARD</span>
                <span className="text-white font-bold">ISO/IEC C++</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/40">ALGORITHMS</span>
                <span className="text-white font-bold">A* / Dijkstra</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/40">MEMORY MGMT</span>
                <span className="text-white font-bold">Smart Pointer Pools</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/40">COMPILER</span>
                <span className="text-white font-bold">MSVC / GCC / Clang</span>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6 text-left border border-white/10 bg-[#050505] rounded-2xl">
            <h3 className="text-xs font-bold tracking-widest text-[#86868b] uppercase font-mono border-b border-white/10 pb-3">
              SYSTEM DATA STRUCTURES
            </h3>
            <div className="flex flex-col gap-5 mt-6">
              <div className="flex gap-2.5 items-start text-xs">
                <CheckCircle2 className="h-4.5 w-4.5 text-[#f5a972] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-white">Smart Node Pools</span>
                  <span className="text-[#86868b] font-medium leading-relaxed">Prevents heap fragmentation via pre-allocated pointer buffers.</span>
                </div>
              </div>

              <div className="flex gap-2.5 items-start text-xs">
                <CheckCircle2 className="h-4.5 w-4.5 text-[#f5a972] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-white">Custom Open List queue</span>
                  <span className="text-[#86868b] font-medium leading-relaxed">Optimized std::priority_queue structure for sorting node F-Costs.</span>
                </div>
              </div>
            </div>
          </GlassCard>

        </div>

      </div>

    </div>
  );
};
