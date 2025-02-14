import React from 'react';

class CardFlip extends React.Component {
  render() {
    return (
      <div
        className="group relative h-96 w-72 [perspective:1000px] transform transition-transform hover:scale-105 hover:ring-4 hover:ring-pink-500"
        style={{ fontFamily: 'Gotham' }} 
      >
        <div className="absolute duration-1000 w-full h-full [transform-style:preserve-3d] group-hover:[transform:rotateX(180deg)]">
          {/* Front Side with font-weight 500 */}
          <div
            className="absolute w-full h-full rounded-xl bg-gradient-to-br from-slate-800 to-gray-900 p-6 text-white [backface-visibility:hidden]"
            style={{ fontWeight: 500 }}
          >
            <div className="flex flex-col h-full">
              <div className="flex justify-between items-start">
                <div className="text-3xl">Wanna talk to me?</div>
              </div>
              <div className="mt-4" style={{ fontWeight: 'normal' }}>
                <p className="text-lg">
                  Front content goes here. This is visible before hovering.
                </p>
              </div>
              <div className="mt-auto" style={{ fontWeight: 'normal' }}>
                <p className="text-sm opacity-75">Hover to flip!</p>
              </div>
            </div>
          </div>

          {/* Back Side with font-weight 500 for the title, normal for the rest */}
          <div
            className="absolute w-full h-full rounded-xl bg-gradient-to-br from-gray-800 to-slate-700 p-6 text-white [transform:rotateX(180deg)] [backface-visibility:hidden]"
            style={{ fontWeight: 500 }}
          >
            <div className="flex flex-col h-full">
              <div className="text-2xl mb-4">Back Side</div>
              <div className="flex-grow" style={{ fontWeight: 'normal' }}>
                <p className="text-lg">
                  Back content goes here. This is visible after hovering.
                </p>
              </div>
              <div className="flex justify-between items-center mt-auto" style={{ fontWeight: 'normal' }}>
                <button className="px-4 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-opacity-90 transition-colors">
                  Action
                </button>
                <span className="text-3xl">✨</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CardFlip;