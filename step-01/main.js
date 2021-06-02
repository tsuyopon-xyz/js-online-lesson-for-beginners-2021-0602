// 1. 変数
/*
// const, letを使う（教材によってはvarを使うものもあるが、古めの情報の可能性がある）
// const : 値の再代入ができない
// let : 値の再代入ができる
// 値とは : 文字列、数値、真偽値(true, false)、関数、配列、オブジェクトなど「何かしらの情報」を指す
// const lastName = '山田';
// const firstName = '太郎';
// const fullName = lastName + firstName;

// console.log(lastName);
// console.log(firstName);
// console.log(fullName);

// lastName = '田中'; // エラーになる（constて定義した変数（定数）に対して、値を再代入しようとしているため）

let lastName2 = '鈴木';
let firstName2 = '一郎';
let fullName2 = lastName2 + firstName2;

console.log('変更前 : ', lastName2);
console.log(firstName2);
console.log(fullName2);

lastName2 = '高橋';
console.log('変更後 : ', lastName2);
*/

// 2. 条件分岐

// 19 : Number(数値)
// "19" : String(文字列)
// const age = 19;

// if (age === 19) {
//   console.log('ageは19');
// } else {
//   console.log('ageは19じゃない');
// }

// if (age == '19') {
//   console.log(
//     '「==」だとstringの"19"とnumberの19の型の違いを厳密に比較しない（暗黙な型変換が行われる）'
//   );
// } else {
//   console.log('ageは19じゃない');
// }

// if (age === '19') {
//   console.log(
//     '「===」だとstringの"19"とnumberの19の型の違いを厳密に比較する（暗黙な型変換が行われない）'
//   );
// } else {
//   console.log('ageは 文字列の "19"');
// }

// 基本的には「==」ではなく、「===」を使うことが良しとされて使われる。
//（暗黙な型変換による意図しない挙動を起こさないため）

// const age = 41;
// if (age > 30) {
//   console.log('31歳以上');
// } else if (age >= 20) {
//   console.log('20歳以上');
// } else if (age >= 15) {
//   console.log('15歳以上');
// } else if (age >= 10) {
//   console.log('15歳以上');
// } else {
//   console.log('10歳未満');
// }

// console.log('条件終了');

// false以外にもfalseと同等な値がある（falsyな値）
// https://developer.mozilla.org/ja/docs/Glossary/Falsy

// true, false
// 真偽値(Boolean型) : true false
// console.log(11 > 10);

// truthy, falsyの値
// falsyな値とはfalseと同じ意味を持つもの
// truthyな値とはtrueと同じ意味を持つもの

// if ('') {
//   console.log('Trueと同等');
// } else {
//   console.log('Falseと同等');
// }

// const text = '';

// if (text) {
//   console.log('textは空文字じゃない');
// } else {
//   console.log('textは空文字');
// }

// const number = 0;

// if (number) {
//   console.log('numberは0じゃない');
// } else {
//   console.log('numberは0');
// }

// 3. ループ

// for
// i++ インクリメント : 0→1, 1→2,
// for (let i = 0; i <= 10; i++) {
//   console.log('forループ : ', i);
// }
// console.log('for終了');

// // while
// let i = 0;
// while (i < 10) {
//   console.log('whileループ : ', i);
//   i++;
// }

// 4. 関数

// function abc() {
//   console.log('おはよう');
//   console.log('こんにちは');
//   console.log('こんばんは');
//   console.log('おやすみなさい');
// }

// abc();

// function hello() {
//   console.log('引数なし、戻り値無しの関数: hello');
// }

// // 引数名name
// function hello2(name) {
//   console.log('引数あり、戻り値ありの関数: hello2 : ', name);
// }

// function hello3(name) {
//   console.log('引数あり、戻り値ありの関数: hello2 : ', name);
//   return 'こんにちは' + name + 'さん';
// }

// // hello();
// // hello2('鈴木');
// // hello3('田中');

// const result1 = hello();
// const result2 = hello2('山田'); // return : 無し
// const result3 = hello3('ジョニー'); // return : こんにちは + name + さん

// console.log('hello関数の実行結果 : ', result1);
// console.log('hello2関数の実行結果 : ', result2);
// console.log('hello3関数の実行結果 : ', result3);

// // 関数宣言
// function test() {
//   // 処理を記述
// }

// 関数式①（functionキーワードを利用した場合）
// const add = function (x, y) {
//   return x + y;
// };

// console.log('addの結果 : ', add(1, 20));

// 関数式②（アロー関数を利用した場合）
// const sub = (x, y) => {
//   return x - y;
// };
// console.log('subの結果 : ', sub(5, 10));

// console.log('addの結果 : ', add(1, 10));
// console.log('subの結果 : ', sub(5, 10));

// 5. 配列

const names = ['山田', '田中', '高橋', '鈴木', 'ジョニー'];

// console.log(names);
// インデックス番号
// console.log(names[0]);
// console.log(names[1]);
// console.log(names[2]);
// console.log(names[3]);
// console.log(names[4]);
// console.log(names[5]);

// // 配列はループと一緒に使うことが多い

// for (let i = 0; i < names.length; i++) {
//   console.log(i + ' : ' + names[i]);
// }

// // 変数の説明のところで「constは再代入できない」と話したが配列内の各値は変更できる

// // これはエラーになる
// // names = [1, 2, 3, 4, 5];

// names[0] = 'ジェームズ';
// console.log(names);
// console.log(names[0]);
// for (let i = 0; i < names.length; i++) {
//   console.log(i + ' : ' + names[i]);
// }

// 6. オブジェクト

// このpersonオブジェクトは4つの「プロパティ(lastName, firstName, gender, age)」を持つ
// const person = {
//   lastName: '山田',
//   firstName: '太郎',
//   gender: '男',
//   age: 17,
// };

// console.log(person);
// console.log(person.lastName);
// console.log(person.firstName);
// console.log(person.gender);
// console.log(person.age);

// 変数の説明のところで「constは再代入できない」と話したが、プロパティの更新はできる

// これはエラーになる
// person = { key: 'value' };

// // プロパティの追加
// person.nationality = '日本';

// console.log(person);
// console.log(person.nationality);

// // 既存プロパティの更新
// person.age = 100;
// console.log(person);
// console.log(person.age);

// let nextId = 1;
// const createTodo = (title) => {
//   // 「変数名」「引数名」がプロパティ名と一緒だったら、以下のtitleのように「: 値」の部分を省略できる
//   const todo = {
//     id: nextId,
//     title,
//   };
//   nextId++;

//   return todo;
// };

// const todos = [createTodo('買い物'), createTodo('掃除'), createTodo('洗濯')];

// console.log(todos);

// for (let i = 0; i < todos.length; i++) {
//   const todo = todos[i];
//   console.log('id : ', todo.id);
//   console.log('title : ', todo.title);
//   console.log('---------------');
// }
