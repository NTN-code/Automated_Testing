const argvs = process.argv
const argv = argvs.slice(2)
const operation = argv[0]
const operator1 = parseInt(argv[1])
const operator2 = parseInt(argv[2])

if (argv.length < 4 && argv.length !== 0) {
    console.log("Need others arguments!");
    process.exit(0);
}

if (isNaN(operator1) || isNaN(operator2)){
    console.log("App takes only numbers!");
    process.exit(0);
}

menu(operation, operator1, operator2)


module.exports = {menu}