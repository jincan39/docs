/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

module.exports = {
  docs: [
    {
      type: 'doc',
      label: 'What is Manta?',
      id: 'Introduction',
    },
    'Roadmap',
    {
      type: 'category',
      label: 'Concepts',
      collapsible: true,
      collapsed: false,
      items: [
        'concepts/ZKP',
        'concepts/PrivatePayment',
        'concepts/zkAddress',
        'concepts/ViewingKey',
        'concepts/Signer',
        'concepts/Governance',
        'concepts/TrustedSetup'
      ],
    },
    {
      type: 'category',
      label: 'Calamari (Manta\'s Canary Network)',
      collapsible: true,
      collapsed: false,
      items: [
        'calamari/Overview',
        {
          type: 'category',
          label: '🐙 Calamari Token (KMA)',
          collapsible: true,
          collapsed: false,
          items: [
            {
              type: "autogenerated",
              dirName: 'calamari/KMA',
            },
          ],
        },
        {
          type: 'category',
          label: 'Staking',
          collapsible: true,
          collapsed: true,
          items: [
            'calamari/Staking/Overview',
            'calamari/Staking/Rewards',
            'calamari/Staking/Rules',
            'calamari/Staking/Early Collator Program',
            {
              type: "category",
              label: 'Delegation',
              collapsed: true,
              items: [
                'calamari/Staking/Delegation/dApp Overview',
                'calamari/Staking/Delegation/HowTo Delegate'
              ],
            },
            {
              type: "category",
              label: 'Collation',
              collapsed: true,
              items: [
                'calamari/Staking/Collation/Overview',
                'calamari/Staking/Collation/Requirements',
                {
                  type: "category",
                  label: 'SetupAndRun',
                  collapsed: true,
                  items: [
                    'calamari/Staking/Collation/SetupAndRun/installation',
                    'calamari/Staking/Collation/SetupAndRun/configuration',
                    'calamari/Staking/Collation/SetupAndRun/running',
                    'calamari/Staking/Collation/SetupAndRun/sync',
                    'calamari/Staking/Collation/SetupAndRun/keys',
                    'calamari/Staking/Collation/SetupAndRun/bond',
                  ],
                },
                'calamari/Staking/Collation/Maintenance',
                'calamari/Staking/Collation/Reduce Bond',
                'calamari/Staking/Collation/Unbond',
                'calamari/Staking/Collation/CollatorFAQ',
              ],

            },
            'calamari/Staking/StakingFAQ',
          ],
        },
        'calamari/Governance',
        'calamari/api',
        'calamari/CrowdloanClaim',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      collapsible: true,
      collapsed: true,
      items: [
        'guides/MantaSigner',
        'guides/DolphinPay',
        'guides/DolphinBridge',
        'guides/TrustedSetup',
        'guides/XcmOnboarding',
      ]
    },
    {
      type: 'category',
      label: 'Learn More About Manta',
      collapsible: true,
      collapsed: true,
      items: [
        'learn/PrivatePayment',
        'learn/MantaPaySpec',
        'learn/ZkpChallenge',
      ]
    }
  ],
};
