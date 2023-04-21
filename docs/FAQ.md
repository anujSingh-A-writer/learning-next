# Why Linting is not running on Pre-Commit?

Run the following command to check the repo from where Git Hooks are being executed:

    `git config --get core.hooksPath`

If `.husky` is not the result, run the following command to add it:

    `git config core.hooksPath .husky`
