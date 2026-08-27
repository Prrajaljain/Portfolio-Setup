'use client';

import React from 'react';

const PHASES = [
  {
    num: '01',
    title: 'Build it on the bench',
    body: 'Model trained, wired to the hardware, running on the desk. Detection works, the servo moves, the loop holds 250Hz.',
    isWeighted: false,
  },
  {
    num: '02',
    title: 'Break it on purpose',
    body: 'Vibration, bad light, lost transmitter signal. The quadcopter needed a failsafe the original firmware never had — a receiver holds its last throttle when the link drops, and the aircraft just flies on.',
    isWeighted: false,
  },
  {
    num: '03',
    title: 'Run it where it matters',
    body: 'A temple during Navratri. A demo for Army Southern Command. Nothing counts until it works in the room.',
    isWeighted: true,
  },
];

const DEPLOYMENTS = [
  {
    context: 'Shri Mahalaxmi Temple, Navratri 2025',
    system: 'Crowd monitoring',
    result: '5,000+ peak crowd',
    isEmphasized: false,
  },
  {
    context: 'Army Southern Command',
    system: 'Payload octocopter',
    result: 'Demonstrated',
    isEmphasized: true,
  },
  {
    context: 'Indo-German Tool Room, Chh. Sambhajinagar',
    system: 'Waste sorting rig',
    result: '92–96% accuracy',
    isEmphasized: false,
  },
  {
    context: 'Open flight field',
    system: 'Arduino quadcopter',
    result: '~15 min endurance',
    isEmphasized: false,
  },
];

export default function HowIBuild() {
  return (
    <section id="how-i-build" className="hib-section">
      <div className="hib-container">
        <div className="hib-grid">
          {/* Left Column */}
          <div className="hib-left-col">
            <div className="hib-header-stack">
              <span className="hib-eyebrow">HOW I BUILD</span>
              <h2 className="hib-headline">From bench to field</h2>
              <p className="hib-subline">
                Three stages. The last one is the only one that counts.
              </p>
            </div>

            {/* Panel */}
            <div className="hib-panel">
              <div className="hib-panel-header">WHERE THESE RAN</div>

              <div className="hib-panel-rows">
                {DEPLOYMENTS.map((row, idx) => (
                  <div
                    key={row.context}
                    className={`hib-row ${idx < DEPLOYMENTS.length - 1 ? 'hib-row-divider' : ''} ${
                      row.isEmphasized ? 'hib-row-mark' : ''
                    }`}
                  >
                    <span className="hib-row-context">{row.context}</span>
                    <div className="hib-row-body">
                      <h4 className="hib-row-system">{row.system}</h4>
                      <span className="hib-row-result">{row.result}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="hib-panel-footer">
                FOUR SYSTEMS &middot; FOUR ENVIRONMENTS
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="hib-right-col">
            {PHASES.map((phase) => (
              <div
                key={phase.num}
                className={`hib-card ${phase.isWeighted ? 'hib-card-weighted' : ''}`}
              >
                <span className="hib-numeral">{phase.num}</span>
                <div className="hib-card-content">
                  <h3 className="hib-card-title">{phase.title}</h3>
                  <p className="hib-card-body">{phase.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .hib-section {
          position: relative;
          border-top: 1px solid #E8E4DE;
          background-color: #F5F4F0;
          overflow: hidden;
        }

        .hib-container {
          max-width: 72rem;
          margin-left: auto;
          margin-right: auto;
          padding: 4rem 1.5rem;
          text-align: left;
        }

        @media (min-width: 640px) {
          .hib-container {
            padding-top: 5rem;
            padding-bottom: 5rem;
          }
        }

        @media (min-width: 1024px) {
          .hib-container {
            padding-top: 6rem;
            padding-bottom: 6rem;
          }
        }

        .hib-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 2.5rem;
          align-items: stretch;
        }

        @media (min-width: 1024px) {
          .hib-grid {
            grid-template-columns: 40% 1fr;
            gap: 4.5rem;
            align-items: stretch;
          }
        }

        .hib-left-col {
          display: flex;
          flex-direction: column;
          text-align: left;
          height: 100%;
        }

        .hib-header-stack {
          display: flex;
          flex-direction: column;
        }

        .hib-eyebrow {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
          font-size: 0.75rem;
          font-weight: 600;
          color: #4A4744;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          display: block;
          margin-bottom: 0.75rem;
        }

        .hib-headline {
          font-size: 1.875rem;
          line-height: 1.25;
          font-weight: 700;
          letter-spacing: -0.025em;
          color: #1A1A1A;
          margin-bottom: 0.75rem;
        }

        @media (min-width: 640px) {
          .hib-headline {
            font-size: 2.25rem;
          }
        }

        @media (min-width: 1024px) {
          .hib-headline {
            font-size: 3rem;
            line-height: 1.15;
          }
        }

        .hib-subline {
          font-size: 1rem;
          line-height: 1.625;
          color: #4A4744;
          font-weight: 500;
          margin-bottom: 2rem;
        }

        @media (min-width: 640px) {
          .hib-subline {
            font-size: 1.125rem;
          }
        }

        .hib-panel {
          margin-top: auto;
          width: 100%;
          border-radius: 20px;
          border: 1px solid #E5E2D9;
          background-color: #FFFFFF;
          padding: 24px 28px 20px 28px;
          box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
          display: flex;
          flex-direction: column;
        }

        .hib-panel-header {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.14em;
          color: #4A4744;
          padding-bottom: 1.25rem;
          border-bottom: 1px solid #E5E2D9;
        }

        .hib-panel-rows {
          display: flex;
          flex-direction: column;
        }

        .hib-row {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          padding-top: 18px;
          padding-bottom: 18px;
        }

        .hib-row-divider {
          border-bottom: 1px solid #F0EEE8;
        }

        .hib-row-mark {
          margin-left: -28px;
          padding-left: 26px;
          border-left: 2px solid #E2703A;
          border-radius: 0;
        }

        .hib-row-context {
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
          font-size: 11px;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          color: #4A4744;
        }

        .hib-row-body {
          display: flex;
          flex-direction: column;
          gap: 0.375rem;
        }

        @media (min-width: 900px) {
          .hib-row-body {
            flex-direction: row;
            align-items: baseline;
            justify-content: space-between;
            gap: 1rem;
          }
        }

        .hib-row-system {
          font-size: 16px;
          font-weight: 600;
          color: #1A1A1A;
          line-height: 1.375;
          margin: 0;
        }

        .hib-row-result {
          flex: none;
          font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace;
          font-size: 13px;
          color: #a8461a;
          background: none;
          border: none;
          padding: 0;
        }

        .hib-panel-footer {
          border-top: 1px solid #E5E2D9;
          padding-top: 12px;
          margin-top: 1rem;
          font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
          font-size: 11px;
          letter-spacing: 0.05em;
          color: #4A4744;
          text-align: right;
          text-transform: uppercase;
        }

        .hib-right-col {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          gap: 1.5rem;
          width: 100%;
        }

        .hib-card {
          position: relative;
          overflow: visible;
          border-radius: 20px;
          background-color: #FAF9F6;
          padding: 32px 32px 32px 96px;
          color: #1A1A1A;
          border: 1px solid #E5E2D9;
          transition: border-color 0.3s ease;
        }

        .hib-card-weighted {
          background-color: #E2703A;
          color: #FDFCF9;
          border: none;
          box-shadow: 0 12px 32px rgba(226, 112, 58, 0.18);
          padding: 32px 32px 32px 96px;
        }

        .hib-numeral {
          position: absolute;
          left: 26px;
          top: 30px;
          width: auto;
          font-family: ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace;
          font-size: 62px;
          font-weight: 700;
          line-height: 0.78;
          letter-spacing: -0.05em;
          color: transparent;
          -webkit-text-stroke: 1.5px #E2703A;
          pointer-events: none;
          user-select: none;
        }

        .hib-card-weighted .hib-numeral {
          color: transparent;
          -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.9);
        }

        .hib-card-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .hib-card-title {
          font-size: 20px;
          font-weight: 600;
          line-height: 1.375;
          margin: 0;
          color: inherit;
        }

        .hib-card-body {
          font-size: 15px;
          line-height: 1.625;
          font-weight: 400;
          margin: 0;
          color: inherit;
          max-width: 46ch;
        }

        @media (max-width: 900px) {
          .hib-card {
            padding-left: 72px;
          }
          .hib-numeral {
            left: 18px;
            top: 20px;
            font-size: 44px;
          }
          .hib-panel {
            margin-top: 0;
            padding: 22px;
          }
          .hib-row-mark {
            margin-left: 0;
            padding-left: 14px;
          }
        }
      `}</style>
    </section>
  );
}
