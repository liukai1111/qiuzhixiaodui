import { useState, useCallback } from 'react'
import logoImg from '../assets/logo.png'
import qrcodeImg from '../assets/qrcode.jpg'
import { useNavigate } from 'react-router-dom'
import { Button } from 'antd-mobile'
import styles from './Portal.module.css'

const features = [
  { icon: 'brain', title: 'AI 深度解析', desc: '7维职业能力精准画像' },
  { icon: 'flash', title: '5分钟快速', desc: '50题轻松完成' },
  { icon: 'lock', title: '隐私安全', desc: '数据本地处理' },
]

function FeatureIcon({ type }) {
  if (type === 'brain') {
    return (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#1677ff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z" />
        <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z" />
      </svg>
    )
  }
  if (type === 'flash') {
    return (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="#fa8c16" stroke="#fa8c16" strokeWidth="1" strokeLinejoin="round">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    )
  }
  if (type === 'lock') {
    return (
      <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="#52c41a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    )
  }
  return null
}

function CompassIcon() {
  return (
    <svg viewBox="0 0 64 64" width="64" height="64" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="32" cy="32" r="26" />
      <polygon points="32,12 38,32 32,40 26,32" fill="#ffffff" stroke="none" opacity="0.9" />
      <polygon points="32,52 26,32 32,24 38,32" fill="#1677ff" stroke="none" opacity="0.6" />
      <circle cx="32" cy="32" r="2.5" fill="#ffffff" stroke="none" />
    </svg>
  )
}

const testimonials = [
  {
    text: '"纠结转行迷茫了很久，做完这份职业测评豁然开朗，能精准匹配适配赛道，未来职业发展方向一下子清晰明朗了很多。"',
    name: '张同学',
  },
  {
    text: '"测评答题流程简洁易懂，全程五分钟就能完成，生成的分析报告维度全面细致，把性格优势、适配岗位都梳理得清清楚楚，实用性很强。"',
    name: '王同学',
  },
  {
    text: '"身边好友强烈推荐来做职业测评，对比自己盲目摸索，测评给出的规划客观专业，找发展方向靠谱省心。"',
    name: '李同学',
  },
]

export default function Portal() {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const onStart = useCallback(() => {
    setLoading(true)
    navigate('/survey')
  }, [navigate])

  return (
    <div className={styles.portal}>
      <div className={styles.content}>
        {/* 品牌区：LOGO 图片（替代原"求职小队"文字） */}
        <div className={styles.brand}>
          <img className={styles.brandLogo} src={logoImg} alt="求职小队" />
        </div>

        {/* 主标题区：背景从深蓝渐变到白 */}
        <div className={styles.hero}>
          <div className={styles.heroIcon}><CompassIcon /></div>
          <h1 className={styles.title}>职业潜力挖掘与优势测评</h1>
          <p className={styles.subtitle}>5分钟了解你的职业发展潜力</p>
          <p className={styles.count}>已有 23,000 人完成测评</p>
        </div>

        {/* 卖点区 */}
        <div className={styles.features}>
          {features.map((f, i) => (
            <div key={i} className={styles.featureItem}>
              <div className={styles.featureIcon}><FeatureIcon type={f.icon} /></div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>

        {/* 开始按钮 */}
        <div className={styles.startSection}>
          <Button
            block
            color="primary"
            size="large"
            loading={loading}
            onClick={onStart}
            className={styles.submitBtn}
          >
            开始测评
          </Button>
          <p className={styles.agreement}>
            点击开始即表示同意《用户协议》和《隐私政策》
          </p>
        </div>

        {/* 评价区 */}
        <div className={styles.testimonials}>
          {testimonials.map((t, i) => (
            <div key={i} className={styles.testimonialItem}>
              <p className={styles.testimonialText}>{t.text}</p>
              <p className={styles.testimonialName}>— {t.name}</p>
            </div>
          ))}
        </div>

        {/* 关注区 */}
        <div className={styles.follow}>
          <h3>想更了解你的职业规划，添加小助手</h3>
          <div className={styles.qrPlaceholder}>
            <img className={styles.qrImage} src={qrcodeImg} alt="小助手二维码" />
            <p className={styles.qrHint}>长摁图片添加求职小队小助手</p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className={styles.footer}>
        <p>© 2026求职小队版权所有</p>
      </footer>
    </div>
  )
}
