import { useRef } from 'react';
import { Id } from '../../convex/_generated/dataModel';
import PlayerDetails from './PlayerDetails.tsx';

export default function RightColumnArea({
  worldId,
  engineId,
  game,
  selectedElement,
  setSelectedElement,
}: {
  worldId: Id<'worlds'>;
  engineId: Id<'engines'>;
  game: any;
  selectedElement: any;
  setSelectedElement: (element: any) => void;
}) {
  const scrollViewRef = useRef<HTMLDivElement>(null);

  return (
    <>
      {/* 右侧固定区域 */}
      {/* <div
        className="fixed right-0 top-60 h-full w-96 flex flex-col overflow-y-auto px-4 py-6 sm:px-6 border-l-8 border-red-900 bg-red-950 text-yellow-300"
        ref={scrollViewRef}
      > */}
        <PlayerDetails
          worldId={worldId}
          engineId={engineId}
          game={game}
          playerId={selectedElement?.id}
          setSelectedElement={setSelectedElement}
          scrollViewRef={scrollViewRef}
        />
      {/* </div> */}
    </>
  );
}
