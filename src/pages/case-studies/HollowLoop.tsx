import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Cpu, ShieldCheck, Zap, Layers, FileCode, CheckCircle2 } from 'lucide-react';
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
    <div className="mx-auto max-w-7xl px-6 py-12 sm:px-8 lg:px-12 font-sans text-white">
      
      {/* Back to Projects */}
      <div className="mb-8">
        <Link 
          to="/projects"
          className="inline-flex items-center gap-2 text-xs font-bold text-white/50 hover:text-white transition-colors duration-300"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Projects
        </Link>
      </div>

      {/* Hero Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
        
        {/* Left header */}
        <div className="lg:col-span-8 text-left">
          <span className="text-xs font-bold tracking-widest text-[#4F8CFF] uppercase font-mono">
            GAMEPLAY PROGRAMMING CASE STUDY
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl mt-2">Hollow Loop</h1>
          <h2 className="mt-3 text-lg sm:text-xl font-medium text-white/60">
            3D Psychological Horror Game &bull; Built in Unity
          </h2>
          
          <div className="flex flex-wrap gap-2 mt-6">
            {['Unity Engine', 'C#', 'Blender', 'OOP Architecture', 'Event-Driven', 'Modular Design'].map((tech) => (
              <span key={tech} className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-white/5 border border-white/5 text-white/70">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right role summary */}
        <div className="lg:col-span-4 w-full">
          <GlassCard className="p-6 text-left border border-[#4F8CFF]/20 bg-[#4F8CFF]/5">
            <span className="text-[10px] font-mono text-white/40 tracking-wider uppercase block">DEVELOPMENT ROLE</span>
            <span className="text-xl font-bold text-white block mt-1">Lead Gameplay Systems Programmer</span>
            <span className="text-xs text-white/50 mt-3 block leading-relaxed">
              Responsible for the core system architecture, decoupled scene management pipelines, state serialization, and performance optimization.
            </span>
          </GlassCard>
        </div>
      </div>

      {/* Case Study Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        
        {/* Left Column: Details */}
        <div className="lg:col-span-8 flex flex-col gap-10 text-left">
          
          {/* Overview */}
          <GlassCard className="p-8">
            <h3 className="text-xl font-bold text-white tracking-tight border-b border-white/5 pb-3">Project Overview</h3>
            <p className="text-sm sm:text-base text-white/70 mt-4 leading-relaxed font-normal">
              Hollow Loop is a 3D psychological horror game centered around puzzle solving and navigating an eerie, changing mansion environment. Due to the complex events, inventory requirements, and changing states, my main challenge was designing a robust system architecture that prevented code spaghetti, coupled dependencies, and scene transition bugs.
            </p>
          </GlassCard>

          {/* Gameplay Systems Breakdown */}
          <GlassCard className="p-8">
            <h3 className="text-xl font-bold text-white tracking-tight border-b border-white/5 pb-3">Core Systems Engineered</h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4.5 w-4.5 text-[#4F8CFF]" />
                  <h4 className="text-base font-bold text-white">State Save & Serialization</h4>
                </div>
                <p className="text-xs text-white/50 leading-relaxed pl-6">
                  Developed an interface-driven checkpoint/save script utilizing JSON serialization. Decoupled game entity save states using custom IDs.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Layers className="h-4.5 w-4.5 text-[#4F8CFF]" />
                  <h4 className="text-base font-bold text-white">Event-Driven Gameplay</h4>
                </div>
                <p className="text-xs text-white/50 leading-relaxed pl-6">
                  Implemented global publishers and subscribers using C# delegates and Actions. This decoupled door unlocks, triggers, and camera cues from standard update loops.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Cpu className="h-4.5 w-4.5 text-[#4F8CFF]" />
                  <h4 className="text-base font-bold text-white">Decoupled Inventory System</h4>
                </div>
                <p className="text-xs text-white/50 leading-relaxed pl-6">
                  Engineered a slot-based grid inventory using scriptable objects for item definitions and custom triggers for visual updates.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <Zap className="h-4.5 w-4.5 text-[#4F8CFF]" />
                  <h4 className="text-base font-bold text-white">Asynchronous Scene Pipeline</h4>
                </div>
                <p className="text-xs text-white/50 leading-relaxed pl-6">
                  Managed multi-scene loading with transition thresholds, preventing frame rate stutter during heavy asset loads.
                </p>
              </div>
            </div>
          </GlassCard>

          {/* Code Section */}
          <GlassCard className="p-8">
            <div className="flex items-center justify-between border-b border-white/5 pb-3">
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <FileCode className="h-5 w-5 text-[#4F8CFF]" />
                Gameplay Serialization Snippet
              </h3>
              <span className="text-[10px] font-mono text-white/40">C# SCRIPT</span>
            </div>
            
            {/* Code Block Container */}
            <div className="mt-6 rounded-xl border border-white/5 bg-black/60 p-4 font-mono text-xs overflow-x-auto leading-relaxed max-h-[400px]">
              <pre className="text-left text-white/80">
                <code>{codeSnippet}</code>
              </pre>
            </div>
          </GlassCard>

        </div>

        {/* Right Column: Specifications & Performance */}
        <div className="lg:col-span-4 flex flex-col gap-8 text-left">
          
          {/* Engine Parameters */}
          <GlassCard className="p-6">
            <h3 className="text-lg font-bold text-white tracking-tight border-b border-white/5 pb-2">Technical specs</h3>
            
            <div className="flex flex-col gap-4 mt-4 text-xs font-mono">
              <div className="flex items-center justify-between">
                <span className="text-white/40">ENGINE</span>
                <span className="text-white">Unity 2022.3 LTS</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/40">RENDER PIPELINE</span>
                <span className="text-white">URP (Universal Render)</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/40">LANGUAGE</span>
                <span className="text-white">C# / Mono</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/40">ARCHITECTURE</span>
                <span className="text-white">Component & Events</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-white/40">ASSETS MODELER</span>
                <span className="text-white">Blender 3.6 LTS</span>
              </div>
            </div>
          </GlassCard>

          {/* Performance Optimization Breakdown */}
          <GlassCard className="p-6">
            <h3 className="text-lg font-bold text-white tracking-tight border-b border-white/5 pb-2">Optimization Work</h3>
            
            <div className="flex flex-col gap-4 mt-6">
              <div className="flex gap-2.5 items-start">
                <CheckCircle2 className="h-4.5 w-4.5 text-[#4F8CFF] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white">Garbage Collection Control</span>
                  <span className="text-[11px] text-white/40 mt-1">Avoided object instantiation inside update cycles, utilizing generic caching templates.</span>
                </div>
              </div>

              <div className="flex gap-2.5 items-start">
                <CheckCircle2 className="h-4.5 w-4.5 text-[#4F8CFF] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white">Asset Atlasing & Baking</span>
                  <span className="text-[11px] text-white/40 mt-1">Baked lighting maps and combined diffuse textures in Blender, dropping draw call limits significantly.</span>
                </div>
              </div>

              <div className="flex gap-2.5 items-start">
                <CheckCircle2 className="h-4.5 w-4.5 text-[#4F8CFF] shrink-0 mt-0.5" />
                <div className="flex flex-col">
                  <span className="text-xs font-bold text-white">Static Occlusion Culling</span>
                  <span className="text-[11px] text-white/40 mt-1">Configured occlusion areas in hallways, hiding mansion rooms that were not within the player's frustum.</span>
                </div>
              </div>
            </div>
          </GlassCard>
        </div>

      </div>

    </div>
  );
};
