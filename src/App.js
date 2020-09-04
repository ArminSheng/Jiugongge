import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const questions = [
    '关于自己的3个标签，并给出标签的故事/原因吧！',
    '关于自己最喜欢的一首歌，并讲原因吧！',
    '关于自己现在工作/生活状态吧!',
    '聊聊最近让自己很开心 / 很难过的一件事吧！',
    '展示最近自己拍的很满意的照片，可以是场景/人物，讲讲原因吧！',

    '请CP简单描述下现在所在的环境吧！（比如：我现在正坐在星巴克里等我的咖啡）',
    '请CP把最近的一条朋友圈截图给你看吧！（如果涉及隐私可以换一条和自己相关的朋友圈）',
    '请CP讲讲最近下班/下课后，休闲时间喜欢做的事情吧！',
    '请向CP提一个你想了解的任意问题吧！（注意分寸，不要让刚刚认识的CP感到为难哦）'
  ];
  // const _cells = questions.map(q => ({content: q, fliped: false}));

  const [cells, setCells] = useState([]);

  const shuffle = () => {
    const s = new Set();
    while(s.size < questions.length) {
      let i = parseInt(Math.random() * 9);
      s.add(questions[i]);
    }
    return Array.from(s);
  }

  const doShuffle = () => {
    const res = shuffle().map(q => ({content: q, fliped: false}));
    setCells(res);
    console.log(cells, res);
  }


  const onFlip = i => {
    i.fliped = !i.fliped;
    setCells(cells.concat());
  }

  useEffect(doShuffle, []);

  return (
    <div className="App">
      <div className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        <p style={{textAlign: "center"}}>冲关九宫格 
          <button onClick={doShuffle}>Start</button>
        </p>
        <div className="flex-container">
          {
            cells.map((c, idx) => 
              <div key={idx} className={'flex-cell' + (!c.fliped ? ' flip' : '')}>
                <div className="flex-item" onClick={() => onFlip(c)}>
                  <span style={{display: c.fliped ? 'none' : 'block', color: '#fff'}}>{idx + 1}</span>
                  <span style={{display: !c.fliped ? 'none' : 'block', color: '#fff'}}>
                    {idx + 1}. {c.content}
                    </span>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}

export default App;
