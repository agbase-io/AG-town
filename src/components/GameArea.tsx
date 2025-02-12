import { useRef } from 'react';
import { Stage } from '@pixi/react';
import { ConvexProvider } from 'convex/react';
import { Id } from '../../convex/_generated/dataModel';
import PixiGame from './PixiGame.tsx';
import { useElementSize } from 'usehooks-ts';
import { DebugTimeManager } from './DebugTimeManager.tsx';
import { SHOW_DEBUG_UI } from './Game.tsx'; // 从 Game.tsx 导入常量

export default function GameArea({
  convex,
  game,
  worldId,
  engineId,
  historicalTime,
  setSelectedElement,
  timeManager,
}: {
  convex: any;
  game: any;
  worldId: Id<'worlds'>; // 使用 Id<'worlds'> 类型
  engineId: Id<'engines'>; // 使用 Id<'engines'> 类型
  historicalTime: any;
  setSelectedElement: (element: any) => void;
  timeManager: any;
}) {
  const [gameWrapperRef, { width, height }] = useElementSize();

  return (
    <>
      {SHOW_DEBUG_UI && <DebugTimeManager timeManager={timeManager} width={200} height={100} />}
      <div className="mx-auto w-full max-w grid grid-rows-[240px_1fr] lg:grid-rows-[1fr] lg:grid-cols-[1fr_auto] lg:grow max-w-[1400px] min-h-[480px] game-frame">
        {/* Game area */}
        <div className="relative overflow-hidden bg-brown-900" ref={gameWrapperRef}>
          <div className="absolute inset-0">
            <div className="container">
              <Stage width={width} height={height} options={{ backgroundColor: 0x7ab5ff }}>
                <ConvexProvider client={convex}>
                  <PixiGame
                    game={game}
                    worldId={worldId}
                    engineId={engineId}
                    width={width}
                    height={height}
                    historicalTime={historicalTime}
                    setSelectedElement={setSelectedElement}
                  />
                </ConvexProvider>
              </Stage>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}