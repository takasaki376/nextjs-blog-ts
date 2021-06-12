import { NextPage } from "next";
import styles from "../styles/login.module.css";

const Signin: NextPage = () => {
  return (
    <div className={styles.root}>
      <div className={styles.header}>
        <div>
          <img
            className={styles.headerImg}
            src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
            alt="Workflow"
          />
          <h2 className={styles.headerH2}>Sign in to your account</h2>
        </div>
      </div>

      <form className={styles.form}>
        <div className={styles.inputFrame}>
          <div>
            <label className={styles.label}>Email address</label>
            <input
              type="text"
              required
              className={styles.inputuser}
              placeholder="Email address"
            />
          </div>
          <div>
            <label className={styles.label}>Password</label>
            <input
              type="password"
              required
              className={styles.inputpassward}
              placeholder="Password"
            />
          </div>
        </div>

        <div className={styles.modeFrame}>
          <div className={styles.textFrame}>
            <a href="#" className={styles.text}>
              ログイン
            </a>
          </div>
          <div className={styles.textFrame}>
            <a href="#" className={styles.text}>
              パスワードを忘れた場合はこちら
            </a>
          </div>
        </div>

        <div>
          <button type="submit" className={styles.button}>
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};
export default Signin;
