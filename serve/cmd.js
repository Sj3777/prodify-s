#!/usr/bin/env node
import { spawn } from "child_process";
import path, { resolve } from "path";
import fs from "fs-extra";
import figlet from "figlet";
// const chalk = require('chalk')
import chalk from "chalk";
// const logSymbols = require('log-symbols')
import logSymbols from "log-symbols";
// const ora = require('ora')
import ora from "ora";
// const boxen = require('boxen')
import boxen from "boxen";
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
// console.log('directory-name 👉️', __dirname);

const _f_nm = process.argv.slice(2);
const _s_t = new Date().getTime();

if (_f_nm.length === 0) {
  console.log(logSymbols.error, chalk.red("Invalid args..."));
  console.log(chalk.blue("Quick start..."));
  console.group();
  console.log(chalk.bgCyan("prodify-s ."), "(OR prodify-s .)");
  console.log(`installs in current directory (${process.cwd()})`);
  console.log("OR");
  console.log(chalk.bgCyan("sj-plz myNestApp"), "(OR prodify-s myNestApp)");
  console.log(
    `installs in "myNestApp" directory (${path.join(
      process.cwd(),
      "myNestApp"
    )})`
  );
  console.groupEnd();
  // return
}

const _t_dict = path.join(process.cwd(), _f_nm[0]);
figlet(
  "SJ nest it!",
  { font: "Standard", width: 150, whitespaceBreak: true },
  (err, data) => {
    if (err) {
      console.log("Something went wrong...");
      console.log(err);
      return;
    }
    console.log(chalk.green(data));
    const _git_l = "https://github.com/Sj3777/";
    const _inst_l = "https://instagram.com/_sudhakarjha_";
    const _git = `${chalk.white("📺 Github @")} ${chalk.red(_git_l)}`;
    const _insta = `${chalk.white("💰 Insta @")} ${chalk.yellow(_inst_l)}`;
    const _head = `${_git}\n${_insta}`;
    console.log(
      boxen(_head, {
        title: "Do Consider",
        borderColor: "magenta",
        borderStyle: "singleDouble",
        align: "left",
        textAlignment: "center",
      })
    );
    bootstrapApp();
  }
);

async function bootstrapApp() {
  try {
    if (!(await fs.pathExists(_t_dict))) {
      await fs.mkdir(_t_dict);
    }

    const files = await fs.readdir(_t_dict);
    if (files.length > 0) {
      console.log(
        logSymbols.error,
        `Path ${chalk.green(_t_dict)} not empty, ${chalk.red("aborting")}`
      );
      return;
    }
    console.log("🚚 Bootstrapping Nest app at", chalk.green(_t_dict), "\n");
    await cloneFiles();
    await cloneFolder();
    await alterPackageFile();
    await installDependency("npm", ["i"], "Installing nest dependencies ...");
    done();
  } catch (error) {
    console.log(error);
  }
}

function installDependency(command, args, spinnerText) {
  return new Promise((resolve, reject) => {
    const _spin_it = ora({ text: spinnerText, spinner: "dots" }).start();
    const child = spawn(command, args, { cwd: _t_dict, shell: true });
    child.on("exit", (code, signal) => {
      if (code) {
        _spin_it.fail();
        console.log(`Process exit with code: ${code}`);
        reject(`Process exit with code: ${code}`);
      } else if (signal) {
        _spin_it.fail();
        console.log(`Process exit with signal: ${signal}`);
        reject(`Process exit with signal: ${signal}`);
      } else {
        _spin_it.succeed();
        resolve();
      }
    });
  });
}

var cloneFolder = () => {
  return new Promise(async (resolve, reject) => {
    const _spin_it = ora("Linking assests ...").start();
    // To copy a folder or file, select overwrite accordingly
    try {
      // src folder
      const _c_src = path.join(__dirname, "..", "prototype", "src");
      const _t_src = path.join(_t_dict, "src");
      fs.copySync(_c_src, _t_src, { overwrite: true | false });

      // test
      const _c_test = path.join(__dirname, "..", "prototype", "test");
      const _t_test = path.join(_t_dict, "test");
      fs.copySync(_c_test, _t_test, { overwrite: true | false });

      _spin_it.succeed();
      resolve();
    } catch (err) {
      _spin_it.fail();
      reject(err);
    }
  });
};
function cloneFiles() {
  return new Promise(async (resolve, reject) => {
    console.log(chalk.yellow("------------------------------------"));
    const _spin_it = ora("Building files ...").start();
    try {
      //tsconfig file
      const _c_ts = path.join(__dirname, "..", "prototype", "tsconfig.json");
      const _t_ts = path.join(_t_dict, "tsconfig.json");
      await fs.copyFile(_c_ts, _t_ts);

      //tsconfig.build
      const _c_tb = path.join(__dirname, "..", "prototype", "tsconfig.build.json");
      const _t_tb = path.join(_t_dict, "tsconfig.build.json");
      await fs.copyFile(_c_tb, _t_tb);

      //nest-cli
      const _c_cl = path.join(__dirname, "..", "prototype", "nest-cli.json");
      const _t_cl = path.join(_t_dict, "nest-cli.json");
      await fs.copyFile(_c_cl, _t_cl);

      //es-lint
      const _c_lint = path.join(__dirname, "..", "prototype", ".eslintrc.js");
      const _t_lint = path.join(_t_dict, ".eslintrc.js");
      await fs.copyFile(_c_lint, _t_lint);

      //git-ignore
      const _c_ig = path.join(__dirname, "..", "prototype", ".gitignore");
      const _t_ig = path.join(_t_dict, ".gitignore");
      await fs.copyFile(_c_ig, _t_ig);

      //prettier
      const _c_ptr = path.join(__dirname, "..", "prototype", ".prettierrc");
      const _t_ptr = path.join(_t_dict, ".prettierrc");
      await fs.copyFile(_c_ptr, _t_ptr);

      //env's
      const _c_d_env = path.join(__dirname, "..", "prototype", "dev.env");
      const _t_d_env = path.join(_t_dict, "dev.env");
      await fs.copyFile(_c_d_env, _t_d_env);

      const _c__env = path.join(__dirname, "..", "prototype", "local.env");
      const _t__env = path.join(_t_dict, ".env");
      await fs.copyFile(_c__env, _t__env);

      _spin_it.succeed();
      resolve();
    } catch (error) {
      _spin_it.fail();
      reject(error);
    }
  });
}

function alterPackageFile() {
  return new Promise(async (resolve, reject) => {
    const _spin_it = ora("Bootstraping script file ...").start();
    try {
      const _c__pkg = path.join(__dirname, "..", "prototype", "package.json");
      const _t__pkg = path.join(_t_dict, "package.json");
      await fs.copyFile(_c__pkg, _t__pkg);
      const _p_Src = path.join(_t_dict, "package.json");
      const _p_file = await fs.readFile(_p_Src, { encoding: "utf-8" });
      let _p_Json = JSON.parse(_p_file);
      // let packageJson = await fs.readJson(pkgSrc);
      _p_Json = {
        ..._p_Json,
        name: _f_nm[0],
      };
      const _p_t = path.join(_t_dict, "package.json");
      await fs.writeFile(_p_t, JSON.stringify(_p_Json, null, 2));
      // await fs.writeJSON(pkgDest, packageJson);
      _spin_it.succeed();
      resolve();
    } catch (error) {
      _spin_it.fail();
      reject(error);
    }
  });
}

function done() {
  console.log(chalk.yellow("------------------------------------"));
  console.log("Begin with creating a DB of your choice:");
  console.log("After begin with typing:");
  console.group();
  console.log(chalk.cyanBright("cd"), _f_nm[0]);
  console.log(chalk.cyanBright("npm run start:dev"));
  console.group();
  console.log("starts the development server (using nodemon 😈)");
  console.groupEnd();
  console.log(chalk.cyanBright("nest start"));
  console.group();
  console.log(`starts the server (using nest 🌛)`);
  console.groupEnd();
  console.groupEnd();
  console.log(chalk.yellow("------------------------------------"));

  const _e_t = new Date().getTime();
  const _t_d = (_e_t - _s_t) / 1000;
  console.log(`✅ Boomed in ${_t_d} secs 🌟`);
  console.log("🔥 Happy Nesting 🌈");
  console.log("🤩 Thanks me later! 🎀");
  console.log(
    boxen(chalk.bgYellowBright("Sinning off --- > SJ"), {
      borderColor: "cyan",
      borderStyle: "classic",
      align: "left",
      textAlignment: "center",
    })
  );
}
