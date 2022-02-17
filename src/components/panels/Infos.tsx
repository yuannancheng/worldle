import { Guesses } from "../Guesses";
import { Panel } from "./Panel";
import React from "react";
import { Worldle } from "../Worldle";
import { formatDistance } from "../../domain/geography";
import { SettingsData } from "../../hooks/useSettings";

interface InfosProps {
  isOpen: boolean;
  close: () => void;
  settingsData: SettingsData;
}

export function Infos({ isOpen, close, settingsData }: InfosProps) {
  return (
    <Panel title="怎么玩" isOpen={isOpen} close={close}>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div>
          在6次机会中猜测 <Worldle /> 。
        </div>
        <div>每个猜测都必须是有效的国家，地区...</div>
        <div>
          每次猜测后，您将获得与您的猜测和目标国家/地区的距离、方向和接近度。
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">例如</div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "智利",
                direction: "NE",
                distance: 13_557_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            你猜测的 <span className="uppercase font-bold">智利</span>
            {" "} 距离目标国家
            {formatDistance(13557000, settingsData.distanceUnit)}
            ，目标国家在东北方向，你只有 32% 的接近度，因为它很远！
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "芬兰",
                direction: "SE",
                distance: 3_206_000,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            你的第二个猜测{" "}
            <span className="uppercase font-bold">芬兰</span> 越来越近了！
            {formatDistance(3206000, settingsData.distanceUnit)} ，东南方向，84%！
          </div>
        </div>
        <div>
          <Guesses
            rowCount={1}
            guesses={[
              {
                name: "黎巴嫩",
                direction: "N",
                distance: 0,
              },
            ]}
            settingsData={settingsData}
          />
          <div className="my-2">
            下一个猜测，<span className="uppercase font-bold">黎巴嫩</span>，
            它就是你要猜的国家！恭喜！🎉
          </div>
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3 font-bold">
        每天都会有一个新的 <Worldle /> 可用！
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <div className="font-bold">关于距离</div>
        <div>
          显示的距离对应于选定区域中心与目标区域中心之间的距离。
        </div>
        <div>
          例如，美国和加拿大之间的计算距离约为 {formatDistance(2_260_000, settingsData.distanceUnit)}
          ，即使它们有共同的边.。
        </div>
      </div>
      <div className="space-y-3 text-justify border-b-2 border-gray-200 pb-3 mb-3">
        <Worldle /> <span className="font-bold">深受</span>
        {" "}
        <a
          className="underline"
          href="https://twitter.com/powerlanguish"
          target="_blank"
          rel="noopener noreferrer"
        >
          Josh Wardle (@powerlanguish)
        </a>{" "}
        创建的
        {" "}<a
          className="underline"
          href="https://www.powerlanguage.co.uk/wordle/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Wordle
        </a>{" "}
        启发
      </div>
      <div className="space-y-3 text-justify pb-3">
        <div>
          由{" "}
          <a
            className="underline"
            href="https://twitter.com/teuteuf"
            target="_blank"
            rel="noopener noreferrer"
          >
            @teuteuf
          </a>{" "}制作
        </div>
        <div>
          想要支持？{" "}
          <a
            className="underline"
            href="https://www.ko-fi.com/teuteuf"
            target="_blank"
            rel="noopener noreferrer"
          >
            给我买杯咖啡！ ☕
          </a>
        </div>
        <div>
          <a
            className="underline"
            href="https://github.com/yuannancheng/worldle"
            target="_blank"
            rel="noopener noreferrer"
          >
            源码
          </a>
        </div>
      </div>
    </Panel>
  );
}
