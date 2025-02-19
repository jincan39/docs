# 可重复使用地址

MantaPay 中一个非常基本的概念是**隐私地址**。隐私地址是在 Manta 网络中可重复使用的进行隐私资产存储和转账的地址。其主要特性如下：

1. **可重复使用**：一个隐私地址可以被多次重复使用。
2. **公开性**：你可以安全地公开隐私地址而无需担心隐私泄露。MantaPay 的设计中，这些隐私地址在链上是非公开的。
3. **独立性**：你的隐私地址和公开地址间没有联系。比如说，你可以将公开地址`A` 中的公开资产自由地转换为隐私地址 `S`中的隐私资产，然后再将其赎回为 `B`中的公开资产。
4. **可审计性**：隐私地址中所有的交易都可以通过 [查看密钥](ViewingKey.md)来进行审计。
