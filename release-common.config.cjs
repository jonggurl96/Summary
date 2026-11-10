module.exports = {
	generator: serviceName => ({
		branches : ['main'],
		extends  : ['semantic-release-monorepo'],
		tagFormat: serviceName + '-v${version}',

		plugins: [
			[
				'@semantic-release/commit-analyzer',
				{
					preset      : 'conventionalcommits',
					releaseRules: [
						{ type: 'feat', release: 'patch' },
						{ type: 'patch', release: 'patch' },
						{ type: 'perf', release: 'patch' },
						{ type: 'style', release: 'patch' },
						{ type: 'fix', release: 'minor' },
						{ type: 'minor', release: 'minor' },
						{ type: 'major', release: 'major' },
						{ breaking: true, release: 'major' },
						{ type: 'refactor', release: 'major' },
						{ type: 'chore', release: false },
						{ type: 'docs', release: false },
						{ type: 'test', release: false },
						{ type: 'ci', release: false },
					]
				}
			],
			[
				'@semantic-release/release-notes-generator',
				{
					preset      : 'conventionalcommits',
					presetConfig: {
						types: [
							{ type: 'feat', section: 'Patch Releases' },
							{ type: 'patch', section: 'Patch Releases' },
							{ type: 'fix', section: 'Bug Fixes' },
							{ type: 'minor', section: 'Minor Releases' },
							{ type: 'major', section: 'Major Releases' },
							{ type: 'chore', section: 'Chores' },
							{ type: 'docs', section: 'Documentation' },
							{ type: 'style', section: 'Styles' },
							{ type: 'refactor', section: 'Code Refactoring' },
							{ type: 'perf', section: 'Performance Improvements' },
							{ type: 'test', section: 'Tests' },
							{ type: 'build', section: 'Build System' },
							{ type: 'ci', section: 'Continuous Integration' },
							{ type: 'revert', section: 'Reverts' },
							{ type: 'wip', section: 'Work in Progress' },
							{ type: 'dependencies', section: 'Dependencies' }
						]
					}
				}
			],
			[
				'@semantic-release/changelog',
				{
					changelogFile: 'CHANGELOG.md'
				}
			],
			[
				'@semantic-release/git',
				{
					assets : ['CHANGELOG.md'],
					message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}'
				}
			],
			[
				'@semantic-release/exec',
				{
					prepareCmd:
						'../gradlew -p .. :' + serviceName + ':clean :' + serviceName + ':build ' +
						'-PreleaseVersion=${nextRelease.version}'
				}
			],
			[
				'@semantic-release/github',
				{
					assets        : [
						{
							path : 'dist/*.jar',
							label: `${serviceName} JAR`
						}
					],
					successComment: false,
					failComment   : false
				}
			]
		]
	})
};