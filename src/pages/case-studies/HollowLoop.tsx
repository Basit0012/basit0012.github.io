import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { ArrowLeft, FileCode, CheckCircle2 } from 'lucide-react';
import { GlassCard } from '../../components/ui/GlassCard';

export const HollowLoop: React.FC = () => {
  const codeSnippet = `using System;
using System.IO;
using System.Collections.Generic;
using UnityEngine;

namespace HollowLoop.Core.Systems
{
    public interface ISaveable
    {
        string UniqueID { get; }
        object CaptureState();
        void RestoreState(object state);
    }

    [Serializable]
    public class GameData
    {
        public int currentCheckpointID;
        public List<string> unlockedItems = new List<string>();
        public Dictionary<string, object> entityStates = new Dictionary<string, object>();
    }

    public class SaveManager : MonoBehaviour
    {
        public static SaveManager Instance { get; private set; }
        
        [SerializeField] private string saveFileName = "hollow_loop_save.json";
        private GameData _currentGameData = new GameData();

        private void Awake()
        {
            if (Instance != null && Instance != this)
            {
                Destroy(gameObject);
                return;
            }
            Instance = this;
            DontDestroyOnLoad(gameObject);
        }

        public void SaveGame(int checkpointID)
        {
            _currentGameData.currentCheckpointID = checkpointID;
            _currentGameData.entityStates.Clear();

            // Find all saveable entities in scene and capture state
            var saveables = FindObjectsByType<MonoBehaviour>(FindObjectsSortMode.None);
            foreach (var saveable in saveables)
            {
                if (saveable is ISaveable target)
                {
                    _currentGameData.entityStates[target.UniqueID] = target.CaptureState();
                }
            }

            string json = JsonUtility.ToJson(_currentGameData, true);
            string path = Path.Combine(Application.persistentDataPath, saveFileName);
            File.WriteAllText(path, json);
            
            Debug.Log($"[SaveManager] State serialized to: {path}");
        }
    }
}`;

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
            GAMEPLAY PROGRAMMING SPEC SHEET
          </span>
          <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tighter mt-4 leading-none">
            Hollow Loop
          </h1>
          <h2 className="mt-4 text-lg sm:text-xl font-medium text-[#86868b]">
            3D Psychological Horror Game &bull; Powered by Unity
          </h2>
        </div>
        <a
          href="https://github.com/Basit0012/HollowLoop"
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
          src="/unity-game.png"
          alt="Hollow Loop screenshot"
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
              Hollow Loop is a 3D psychological horror game focused on inventory-based solving. My core engineering task was developing decoupled, interface-driven modules that serialized state parameters across checkpoints and loading pipelines without generating memory leaks.
            </p>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-6">Systems Architecture</h3>
            <div className="flex flex-col border-t border-white/10">
              
              <div className="py-6 border-b border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <span className="text-xs font-bold text-[#86868b] font-mono uppercase">CORE GAMEPLAY</span>
                <span className="sm:col-span-2 text-xs sm:text-sm text-white/80 leading-relaxed font-medium">
                  Engineered a fully playable 3D psychological horror game utilizing event-driven gameplay scripts and dynamic environment state trackers.
                </span>
              </div>

              <div className="py-6 border-b border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <span className="text-xs font-bold text-[#86868b] font-mono uppercase">MODULAR SUB-SYSTEMS</span>
                <span className="sm:col-span-2 text-xs sm:text-sm text-white/80 leading-relaxed font-medium">
                  Architected highly reusable, modular object sub-systems managing structural player mechanics, absolute checkpoint saving, item inventories, and smooth scene progression.
                </span>
              </div>

              <div className="py-6 border-b border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <span className="text-xs font-bold text-[#86868b] font-mono uppercase">OOP ARCHITECTURE</span>
                <span className="sm:col-span-2 text-xs sm:text-sm text-white/80 leading-relaxed font-medium">
                  Applied comprehensive Object-Oriented Programming (OOP) architectures and design patterns to secure maximum codebase maintainability.
                </span>
              </div>

              <div className="py-6 border-b border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-2">
                <span className="text-xs font-bold text-[#86868b] font-mono uppercase">OPTIMIZATION WORK</span>
                <span className="sm:col-span-2 text-xs sm:text-sm text-white/80 leading-relaxed font-medium">
                  Optimized spatial mesh rendering queues, runtime engine asset loading, and computational script loops to establish smooth performance markers.
                </span>
              </div>

            </div>
          </div>

          {/* Code Section */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <FileCode className="h-5 w-5 text-[#f5a972]" />
                State Serializer Implementation
              </h3>
              <span className="text-[10px] font-mono text-[#86868b]">C# CLASSTEMPLATE</span>
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
                <span className="text-white/40">ENGINE</span>
                <span className="text-white font-bold">Unity 2022.3 LTS</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/40">LANGUAGE</span>
                <span className="text-white font-bold">C# (Mono runtime)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/40">PIPELINE</span>
                <span className="text-white font-bold">URP Render Loop</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/40">MODELS</span>
                <span className="text-white font-bold">Blender 3D mesh</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/40">SERIALIZER</span>
                <span className="text-white font-bold">JSON Utility format</span>
              </div>
            </div>
          </GlassCard>

          <GlassCard className="p-6 text-left border border-white/10 bg-[#050505] rounded-2xl">
            <h3 className="text-xs font-bold tracking-widest text-[#86868b] uppercase font-mono border-b border-white/10 pb-3">
              OPTIMIZATIONS
            </h3>
            <div className="flex flex-col gap-5 mt-6">
              <div className="flex gap-2.5 items-start text-xs">
                <CheckCircle2 className="h-4.5 w-4.5 text-[#f5a972] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-white">LOD Mesh Baking</span>
                  <span className="text-[#86868b] font-medium leading-relaxed">Reduced poly draw call ranges on distant mansion assets.</span>
                </div>
              </div>

              <div className="flex gap-2.5 items-start text-xs">
                <CheckCircle2 className="h-4.5 w-4.5 text-[#f5a972] shrink-0 mt-0.5" />
                <div className="flex flex-col gap-1">
                  <span className="font-bold text-white">GC Allocation Pooling</span>
                  <span className="text-[#86868b] font-medium leading-relaxed">Reused static variables within physics updates, minimizing overhead.</span>
                </div>
              </div>
            </div>
          </GlassCard>

        </div>

      </div>

    </div>
  );
};
