const _getOrg = async (ctx, orgPk) => {
  return await runInTx(ctx, async (ctxInTx) => {
    const { transaction } = ctxInTx
    const { db } = ctx
    const org = await getOrg({ db, orgPk, transaction })
    return org.org
  })
}
