import{Aa as a,C as B,D as V,Da as c,E as ae,F as se,Ga as K,Ha as me,Ia as J,Ja as O,K as w,Ka as h,L as $,Ma as he,N as H,Na as fe,O as L,Oa as N,Pa as Q,Q as R,Qa as ye,R as x,Ra as $e,Sa as _e,T as E,Ta as I,U as Y,Ua as we,V as oe,Va as xe,X as de,Z as W,_ as Le,aa as le,da as ce,i as Z,ja as Ne,n as A,p as M,q as T,s as ee,v as P,w as Fe,xa as ue,y as k,ya as je,z as ne,za as pe}from"./chunk-BYGF5TYG.js";import{V as ve,a as v,b as D,ba as ie,c as U,e as p,i as te,j as ge,m as G,s as be}from"./chunk-NZ2EV6AM.js";var S,ke=U(()=>{"use strict";me();he();ie();we();S=class extends K{constructor(){super(...arguments);this.workspace=null;this.execute=null;this.batchId="";this.open=!1;this.busy=!1;this.message="";this.failed=!1}willUpdate(e){e.has("batchId")&&(this.open=!1,this.message="")}get batch(){return this.workspace?.batches?.find(e=>e.id===this.batchId)}render(){let e=this.batch,i=e?.yield_actual;if(!e||!i)return c;let t=i.size_counts||{},s=Object.keys(t).filter(y=>t[y]>0),r=e.cure_weigh_ins||[],o=r.reduce((y,z)=>v(v({},y),z.size_counts),t),d=r.at(-1),g=be(e),C=e.cut_at||i.recorded_at,_=this.execute&&s.length&&C&&!e.reconciliation_required&&(e.status==="curing"||e.status==="cured"),F=N(this.workspace);return a`
      <p class="muted">
        Cut yield:
        ${s.map((y,z)=>{let q=i.weight_g_by_size?.[y];return a`${z?" / ":""}${t[y]} x
          ${Q(this.workspace,y)}
          ${q===void 0?c:a`(${I(q)} g; ${I(q/t[y])} g/bar)`}`})}
      </p>
      ${i.scrap_g!==void 0?a`<p class="muted">Measured trim: ${I(i.scrap_g)} g</p>`:c}
      ${g?a`<p class="muted">
            ${I(g.accountedG)} g accounted for of ${I(g.inputG)} g
            recorded in; ${I(Math.abs(g.gapG))} g
            ${g.gapG>=0?"unaccounted for":"over recorded input"}.
          </p>`:c}
      ${i.estimated_trim_in3!==void 0?a`<p class="muted">
            Estimated unused mold volume: ${i.estimated_trim_in3.toFixed(2)}
            in3 (${i.estimated_trim_pct?.toFixed(1)}%)
          </p>`:c}
      ${d?a`<p>Latest weigh-in: ${d.at}</p>
            ${this.renderReading(d,t,i.weight_g_by_size)}`:c}
      ${_&&!this.open?a`<button
            type="button"
            @click=${()=>{this.open=!0,this.message=""}}
          >
            Weigh bars
          </button>`:c}
      ${_&&this.open?a`<form @submit=${this.submit}>
            <h3>Cure weigh-in</h3>
            <div class="groups">
              ${s.map(y=>$e(y,ye(this.workspace,e,y),Q(this.workspace,y),o[y]))}
            </div>
            <div class="actions">
              <label
                >Weigh-in date<input
                  name="at"
                  type="date"
                  value=${F}
                  min=${C}
                  max=${F}
                  required
              /></label>
              <button class="primary" type="submit" ?disabled=${this.busy}>
                Save weigh-in
              </button>
              <button
                type="button"
                ?disabled=${this.busy}
                @click=${()=>{this.open=!1,this.message=""}}
              >
                Cancel
              </button>
            </div>
          </form>`:c}
      ${this.message?a`<p role="status" class=${this.failed?"error":""}>
            ${this.message}
          </p>`:c}
      ${r.length?a`<details>
            <summary>Weigh-in history (${r.length})</summary>
            <ol class="history">
              ${[...r].reverse().map(y=>a`<li>
                    <strong>${y.at}</strong>
                    ${this.renderReading(y,t,i.weight_g_by_size)}
                  </li>`)}
            </ol>
          </details>`:c}
    `}renderReading(e,i,t){return Object.entries(e.weight_g_by_size).map(([s,r])=>{let o=e.size_counts[s],d=t?.[s],g=d===void 0?void 0:(r-d)/d*100;return a`<span class="reading muted">
        ${Q(this.workspace,s)}: ${o} bars / ${I(r)} g /
        ${I(r/o)} g per bar
        ${g===void 0?c:o===i[s]?a`(${g>0?"+":""}${I(g)}% vs cut)`:a`(count changed; no loss estimate)`}
      </span>`})}async submit(e){if(e.preventDefault(),this.busy||!this.execute)return;let i=new FormData(e.currentTarget),{sizeCounts:t,weightGBySize:s}=_e(i);this.busy=!0,this.message="",this.failed=!1;try{let r=await this.execute("recordCureWeighIn",{batchId:this.batchId,at:String(i.get("at")),sizeCounts:Object.fromEntries(Object.keys(s).map(o=>[o,t[o]])),weightGBySize:s});this.dispatchEvent(new CustomEvent("workspace-updated",{detail:r,bubbles:!0,composed:!0})),this.open=!1,this.message="Weigh-in saved."}catch(r){this.failed=!0,this.message=r instanceof Error?r.message:"Weigh-in not saved."}finally{this.busy=!1}}};S.styles=fe,p([O({attribute:!1})],S.prototype,"workspace",2),p([O({attribute:!1})],S.prototype,"execute",2),p([O()],S.prototype,"batchId",2),p([h()],S.prototype,"open",2),p([h()],S.prototype,"busy",2),p([h()],S.prototype,"message",2),p([h()],S.prototype,"failed",2),S=p([J("batch-cure-weights")],S)});function re(u){let l=Math.max(0,Math.floor(u/1e3));return`${Math.floor(l/60).toString().padStart(2,"0")}:${(l%60).toString().padStart(2,"0")}`}function X(u,l){return l?u<3e4?"Under 1 min":`About ${Math.round(u/6e4)} min`:re(u)}function Ce(u,l){let e=new Date(u);return l?`${e.toLocaleTimeString(void 0,{hour:"numeric",minute:"2-digit"})} (estimated)`:e.toLocaleTimeString()}function Ie(u){let l=new Date(u);return new Date(l.getTime()-l.getTimezoneOffset()*6e4).toISOString().slice(0,19)}var Ee,f,j,Se,m,De=U(()=>{"use strict";me();he();ie();xe();ke();we();Ee={lye_ready:"Lye solution ready",oils_ready:"Oil mix ready",mixed:"Oils + lye combined",trace:"Trace",pour_started:"Pour started",pour_finished:"Pour finished"},f=u=>u.replaceAll("_"," "),j=u=>u>0&&u<1?"<1 g":`${Math.round(u).toLocaleString()} g`,Se=u=>u.toLocaleString(void 0,{style:"currency",currency:"USD"});m=class extends K{constructor(){super(...arguments);this.initialRecipeId="";this.workspace=null;this.execute=null;this.selectedId="";this.planning=!1;this.busy=!1;this.message="";this.error=!1;this.now=Date.now();this.draftWeights={};this.yieldOpen=!1;this.pourEndDraft=null;this.omissionMaterial="";this.omissionCorrection=null;this.timeCorrection=null;this.preview=null;this.replacePlans=!1;this.previewRevision=-1;this.recipe="";this.fragrance=0;this.clayReplacement="";this.audit=null;this.auditError="";this.checking=!0;this.moldRows=[];this.auditGeneration=0}connectedCallback(){super.connectedCallback(),this.clock=setInterval(()=>{this.now=Date.now()},1e3)}disconnectedCallback(){super.disconnectedCallback(),clearInterval(this.clock)}willUpdate(e){if(e.has("initialRecipeId")&&this.initialRecipeId&&(this.recipe=this.initialRecipeId,this.planning=!0,this.preview=null),(e.has("workspace")||e.has("selectedId"))&&this.refreshAudit(),this.workspace&&!this.moldRows.length){let i=Object.entries(this.workspace.bar_sizes||{}).filter(([,r])=>r.active!==!1),t=i.find(([r])=>r==="bar_5_2_oz")||i[0],s=i.find(([r])=>r==="bar_1_0_oz")||i[1]||i[0];this.recipe=this.initialRecipeId||this.workspace.base_recipes?.[0]?.id||"",this.initialRecipeId&&(this.planning=!0),t&&s&&(this.moldRows=[t,s].map(([r,o],d)=>{let g=Number(o.cut_depth_in)>0?d===0?16:8:void 0;return{id:`mold-${d+1}`,label:d===0?"Retail column":"Hospitality column",barSize:r,depth:g,volumeIn3:g?Math.round(Number(o.approx_volume_in3)/Number(o.cut_depth_in)*g*100)/100:Math.round(Number(o.approx_volume_in3)*(d===0?10:12)*100)/100}}))}}async refreshAudit(){let e=++this.auditGeneration,i=(this.workspace?.batches||[]).filter(r=>r.production),t=i.find(r=>r.id===this.selectedId)||i.at(-1);if(this.audit=null,this.auditError="",this.checking=!0,!t||t.status!=="planned"||!this.execute){this.checking=!1;return}let s=this.workspace?.revision;try{let r=await this.execute("runCapacityAudit",v(v({},t.formulation.inputs),t.weighing?{weighingResolutionG:1}:{}));e===this.auditGeneration&&s===this.workspace?.revision&&(this.audit=r)}catch(r){e===this.auditGeneration&&(this.auditError=r instanceof Error?r.message:String(r))}finally{e===this.auditGeneration&&(this.checking=!1)}}render(){let e=(this.workspace?.batches||[]).filter(t=>t.production),i=e.find(t=>t.id===this.selectedId)||e.at(-1);return a`
      <header>
        <h2>Production Batch</h2>
        <button
          @click=${()=>{this.planning=!this.planning,this.message=""}}
          ?disabled=${this.busy}
        >
          ${this.planning?"Close planner":"Plan batch"}
        </button>
      </header>
      <div
        class=${`message ${this.error?"error":"ok"}`}
        role=${this.error?"alert":"status"}
      >
        ${this.message}
      </div>
      ${this.planning||!i?this.renderPlanner():c}
      ${i?a`
            <label
              >Batch<select
                @change=${t=>{this.selectedId=t.target.value,this.yieldOpen=!1,this.message=""}}
              >
                ${e.map(t=>a`<option value=${t.id} ?selected=${i.id===t.id}>
                      ${t.date} /
                      ${t.formulation?.base_recipe_name||t.recipe_id} /
                      ${t.id.slice(-8)}
                    </option>`)}
              </select></label
            >
            ${this.renderBatch(i)}
          `:c}
    `}get input(){let e=this.moldRows.map(({id:i,label:t,barSize:s,volumeIn3:r})=>({id:i,label:t,barSize:s,volumeIn3:r}));return v({recipeId:this.recipe,volumeIn3:e.reduce((i,t)=>i+t.volumeIn3,0),molds:e,fragrancePct:this.fragrance,weighingResolutionG:1},this.clayReplacement?{additiveSubstitutions:{kaolin_clay:this.clayReplacement}}:{})}changeMold(e,i){this.moldRows=this.moldRows.map((t,s)=>{if(s!==e)return t;let r=v(v({},t),i),o=this.workspace?.bar_sizes?.[r.barSize];return i.barSize&&(r.depth=Number(o?.cut_depth_in)>0?t.depth||8:void 0),r.depth!==void 0&&Number(o?.cut_depth_in)>0&&(r.volumeIn3=Math.round(Number(o?.approx_volume_in3)/Number(o?.cut_depth_in)*r.depth*100)/100),r}),this.preview=null}renderPlanner(){let e=this.previewRevision===Number(this.workspace?.revision||0)?this.preview:null,i=(this.workspace?.batches||[]).filter(r=>!r.production&&r.status==="planned"&&!r.inventory_deducted&&!r.events?.length),t=e?te(e):{},s=e?Object.keys(e.oils_g||{}).reduce((r,o)=>r+t[o],0):0;return a`<form
      @submit=${r=>{r.preventDefault(),this.run(async()=>{let o=JSON.stringify(this.input),d=Number(this.workspace?.revision||0),g=await this.execute("calculateBatch",this.input);o===JSON.stringify(this.input)&&d===Number(this.workspace?.revision||0)&&(this.preview=g,this.previewRevision=d)},"Formulation calculated.")}}
    >
      <div class="grid">
        <label
          >Recipe<select
            .value=${this.recipe}
            @change=${r=>{this.recipe=r.target.value,this.preview=null}}
          >
            ${[...this.workspace?.base_recipes||[],...this.workspace?.product_recipes||[]].map(r=>a`<option value=${r.id} ?selected=${r.id===this.recipe}>
                  ${r.name}
                </option>`)}
          </select></label
        ><label
          >Fragrance (%)<input
            type="number"
            min="0"
            step="0.1"
            .value=${String(this.fragrance)}
            @input=${r=>{this.fragrance=Number(r.target.value),this.preview=null}}
            required
        /></label>
        ${this.hasKaolin&&a`<label
          >Kaolin replacement<select
            .value=${this.clayReplacement}
            @change=${r=>{this.clayReplacement=r.target.value,this.preview=null}}
          >
            <option value="">Recipe default (kaolin)</option>
            <option value="french_green_clay">
              French green clay / same weight
            </option>
          </select></label
        >`}
      </div>
      <div class="molds">
        <h3>Mold allocations</h3>
        ${this.moldRows.map((r,o)=>a`<div class="mold">
              <label
                >Mold ${o+1}<input
                  .value=${r.label}
                  @input=${d=>this.changeMold(o,{label:d.target.value})}
                  required
              /></label>
              <label
                >Bar size ${o+1}<select
                  .value=${r.barSize}
                  @change=${d=>this.changeMold(o,{barSize:d.target.value})}
                >
                  ${Object.entries(this.workspace?.bar_sizes||{}).filter(([,d])=>d.active!==!1).map(([d,g])=>a`<option value=${d} ?selected=${d===r.barSize}>
                          ${g.display_name||d}
                        </option>`)}
                </select></label
              >
              ${r.depth!==void 0?a`<label
                    >${r.label} fill depth (in)<input
                      type="number"
                      min="0.01"
                      step="0.01"
                      .value=${String(r.depth)}
                      @input=${d=>this.changeMold(o,{depth:Number(d.target.value)})}
                      required
                    /><small>${r.volumeIn3} in3</small></label
                  >`:a`<label
                    >${r.label} volume (in3)<input
                      type="number"
                      min="0.01"
                      step="0.01"
                      .value=${String(r.volumeIn3)}
                      @input=${d=>this.changeMold(o,{volumeIn3:Number(d.target.value)})}
                      required
                  /></label>`}
            </div>`)}
      </div>
      <div class="actions">
        <button
          type="button"
          @click=${()=>{this.moldRows=[...this.moldRows,{id:crypto.randomUUID(),label:`Mold ${this.moldRows.length+1}`,barSize:this.moldRows[0].barSize,volumeIn3:10}],this.preview=null}}
        >
          Add mold
        </button>
        ${this.moldRows.length>1?a`<button
              type="button"
              @click=${()=>{this.moldRows=this.moldRows.slice(0,-1),this.preview=null}}
            >
              Remove last mold
            </button>`:c}
        ${i.length?a`<label
              ><input
                type="checkbox"
                style="width:22px;height:22px"
                .checked=${this.replacePlans}
                @change=${r=>{this.replacePlans=r.target.checked}}
              />Replace ${i.length} unstarted single-mold plans (recovery
              copy retained)</label
            >`:c}
        <button type="submit" ?disabled=${this.busy}>
          Calculate formulation
        </button>
        <button
          type="button"
          class="primary"
          ?disabled=${this.busy||!e}
          @click=${()=>this.run(async()=>{let r=await this.execute("savePlannedBatch",v({input:this.input},this.replacePlans?{replaceBatchIds:i.map(o=>o.id),expectedRevision:this.previewRevision}:{}));this.accept(r),this.selectedId=r.workspace.batches.at(-1).id,this.planning=!1,this.preview=null})}
        >
          Save one batch
        </button>
      </div>
      ${e?a`<div class="summary">
              <div>
                <span>Total oils</span><strong>${j(s)}</strong>
              </div>
              <div>
                <span>Total batter</span
                ><strong
                  >${j(Object.values(t).reduce((r,o)=>r+o,0))}</strong
                >
              </div>
              <div>
                <span>Combined mold volume</span
                ><strong>${e.volume_in3} in3</strong>
              </div>
            </div>
            ${this.materialTable(Object.entries(t),e.materials_required_g)}
            ${e.warnings?.map(r=>a`<p class="muted">${r}</p>`)}
            ${e.molds?.map(r=>a`<p>
                  ${r.label}: ${r.bars_expected} expected
                  ${this.workspace?.bar_sizes?.[r.barSize]?.display_name||r.barSize}
                  bars
                </p>`)}`:c}
    </form>`}get hasKaolin(){let e=this.workspace?.product_recipes?.find(t=>t.id===this.recipe)?.base_recipe_id||this.recipe,i=this.workspace?.base_recipes?.find(t=>t.id===e)?.additives_pct;return typeof i=="object"&&i!==null&&Number(i.kaolin_clay)>0}renderBatch(e){let i=e.formulation,t=e.production,s=Object.keys(i.oils_g||{}),r=[(i.lye_type||"naoh").toLowerCase(),i.liquid_type||"distilled_water"],o=G(i),d=o.filter(n=>!t.additives[n]),g=e.weighing?.suggested_g||te(i),C=v(v({},g),e.weighing?.actual_g),_=e.status==="prepped"&&!t.pour_finished,F=this.auditError;e.status==="planned"&&this.audit&&(F=Object.entries(this.audit.shortages).map(([n,b])=>`${f(n)}: ${j(b.short_g)} short`).join("; "));let y=i.costing.missing_material_costs.filter(n=>!Object.values(this.workspace?.inventory||{}).some(b=>b?.[n]&&(b[n].avg_cost_per_unit!=null||b[n].cost_per_unit!=null))),z=e.total_cost,q=t.pour_finished?Date.parse(t.pour_finished):this.now,Oe=[...Object.entries(t).filter(([n,b])=>Object.hasOwn(Ee,n)&&typeof b=="string").map(([n,b])=>({name:Ee[n],at:b,estimated:n==="pour_finished"&&t.pour_finished_estimated})),...Object.entries(t.additives).map(([n,b])=>({name:`${f(n)} ${e.weighing?.actual_g[n]===0?"omitted":"added"}`,at:b,estimated:!1}))].sort((n,b)=>n.at.localeCompare(b.at));return a`<section>
      <header>
        <div>
          <h3>${i.product_recipe_name||i.base_recipe_name}</h3>
          <span class="batch-id">${e.id}</span>
        </div>
        <strong>${e.status}</strong>
      </header>
      ${i.warnings?.map(n=>a`<p class="muted">${n}</p>`)}
      <div class="summary">
        <div>
          <span>Oil total</span
          ><strong>${j(s.reduce((n,b)=>n+C[b],0))}</strong>
        </div>
        <div>
          <span
            >${e.weighing&&e.inventory_deducted?"Batter weight":"Batter estimate"}</span
          ><strong
            >${j(Object.values(C).reduce((n,b)=>n+b,0))}</strong
          >
        </div>
        <div>
          <span>Material cost</span
          ><strong
            >${e.weighing&&!e.inventory_deducted||e.missing_material_costs?.length||y.length?"Incomplete":z==null?"Not costed":Se(z)}</strong
          >
        </div>
      </div>
      <table aria-label="Mold allocations">
        <thead>
          <tr>
            <th>Mold</th>
            <th>Size</th>
            <th>Fill (in3)</th>
            <th>Expected bars</th>
          </tr>
        </thead>
        <tbody>
          ${i.molds?.map(n=>a`<tr>
                <td>${n.label}</td>
                <td>
                  ${this.workspace?.bar_sizes?.[n.barSize]?.display_name||n.barSize}
                </td>
                <td>${n.volumeIn3}</td>
                <td>${n.bars_expected}</td>
              </tr>`)}
        </tbody>
      </table>
      ${e.status==="planned"?a`<section>
            <h3>Ingredient check</h3>
            ${F?a`<p class="error">${F}</p>`:a`<p class="ok">
                  ${this.checking?"Checking recorded stock...":"Recorded quantities cover this batch."}
                </p>`}
            ${y.length?a`<p class="error">
                  Missing costs: ${y.map(f).join(", ")}
                </p>`:c}
            ${e.weighing?c:a`<button
                  class="primary"
                  ?disabled=${this.busy}
                  @click=${()=>this.run(async()=>this.accept(await this.execute("enableBatchWeighing",{batchId:e.id})))}
                >
                  Use whole-gram actual weights
                </button>`}
            <button
              class="primary"
              ?disabled=${this.busy||this.checking||!this.audit?.can_make||!!F||!!y.length}
              @click=${()=>this.event(e,"prepped")}
            >
              ${e.weighing?"Begin preparation":"Begin prep & consume ingredients"}
            </button>
          </section>`:c}
      <section>
        <div class="grid">
          <div class="stream">
            <h3>Oil mix</h3>
            ${this.renderWeights(e,s)}${this.stepButton(e,"oils_ready","Oil mix ready",!_||this.invalidWeights(e,s))}
          </div>
          <div class="stream">
            <h3>Lye solution</h3>
            ${this.renderWeights(e,r)}${this.stepButton(e,"lye_ready","Lye solution ready",!_||this.invalidWeights(e,r))}
          </div>
        </div>
      </section>
      <section>
        <h3>Combine & trace</h3>
        <div class="timer" role="timer" aria-label="Elapsed since combining">
          ${t.mixed?X(q-Date.parse(t.mixed),t.pour_finished_estimated):"00:00"}
        </div>
        <div class="actions">
          ${this.stepButton(e,"mixed","Combine oils + lye / start timer",!_||!t.oils_ready||!t.lye_ready)}${this.stepButton(e,"trace","Mark trace",!_||!t.mixed||!!t.pour_started)}
        </div>
        ${t.trace&&t.mixed?a`<p>
              Trace at
              <strong
                >+${re(Date.parse(t.trace)-Date.parse(t.mixed))}</strong
              >
            </p>`:c}
      </section>
      <section>
        <h3>Additives</h3>
        <div class="checklist">
          ${o.map(n=>a`<div>
                ${this.renderWeights(e,[n])}<label
                  ><input
                    type="checkbox"
                    aria-label=${e.weighing?.actual_g[n]===0?`${f(n)} omitted`:`Confirm ${f(n)} added`}
                    .checked=${!!t.additives[n]}
                    ?disabled=${this.busy||!_||!!t.additives[n]||this.invalidWeights(e,[n])}
                    @change=${()=>this.productionStep(e,"additive",n)}
                  />${e.weighing?.actual_g[n]===0?`${f(n)} omitted (0 g)`:`Confirm ${f(n)} added`}
                  ${t.additives[n]?a`<time datetime=${t.additives[n]}
                        >${new Date(t.additives[n]).toLocaleTimeString()}</time
                      >`:c}</label
                >
                ${_&&e.weighing&&!t.additives[n]?this.omissionMaterial===n?a`<div class="actions">
                        <button
                          type="button"
                          ?disabled=${this.busy}
                          @click=${()=>this.run(async()=>{this.accept(await this.execute("recordProductionStep",{batchId:e.id,step:"additive",material:n,actualWeightsG:{[n]:0}})),this.omissionMaterial=""},`${f(n)} recorded as omitted. No stock consumed.`)}
                        >
                          Confirm omitted
                        </button>
                        <button
                          type="button"
                          ?disabled=${this.busy}
                          @click=${()=>{this.omissionMaterial=""}}
                        >
                          Cancel omission
                        </button>
                      </div>`:a`<button
                        type="button"
                        ?disabled=${this.busy}
                        @click=${()=>{this.omissionMaterial=n}}
                      >
                        Omit ${f(n)}
                      </button>`:c}
                ${t.additives[n]&&e.status!=="in_inventory"&&!e.reconciliation_required?a`<button
                      type="button"
                      ?disabled=${this.busy}
                      aria-label=${`Correct ${f(n)} time`}
                      @click=${()=>{this.timeCorrection={batchId:e.id,material:n,expectedAt:t.additives[n],at:t.additives[n]}}}
                    >
                      Correct time
                    </button>`:c}
                ${t.additives[n]&&(e.weighing?.actual_g[n]||0)>0&&e.status!=="in_inventory"&&!e.reconciliation_required?a`<button
                      type="button"
                      ?disabled=${this.busy}
                      @click=${()=>{this.omissionCorrection={batchId:e.id,material:n,expectedAt:t.additives[n],expectedWeightG:e.weighing.actual_g[n]}}}
                    >
                      Correct ${f(n)} as omitted
                    </button>`:c}
              </div>`)}
        </div>
        ${o.length?c:a`<span class="muted">None</span>`}
        ${this.timeCorrection?.batchId===e.id?this.renderTimeCorrection(e):c}
        ${this.omissionCorrection?.batchId===e.id?this.renderOmissionCorrection():c}
      </section>
      <section>
        <h3>Pour</h3>
        ${_&&d.length?a`<p id="pour-blocker" role="status">
              End pour requires recorded confirmation for:
              ${d.map(f).join(", ")} (added or omitted).
            </p>`:c}
        <div class="actions">
          ${this.stepButton(e,"pour_started","Start pour",!_||!t.trace)}${this.stepButton(e,"pour_finished","End pour",!_||!t.pour_started||!!d.length)}
        </div>
        ${t.pour_started&&e.status!=="in_inventory"&&!e.reconciliation_required?a`<button
              type="button"
              ?disabled=${this.busy}
              @click=${()=>{this.pourEndDraft=D(v({batchId:e.id},t.pour_finished?{expectedAt:t.pour_finished}:{}),{at:t.pour_finished||new Date().toISOString(),estimated:!!t.pour_finished_estimated})}}
            >
              ${t.pour_finished?"Correct pour end time":"Enter actual end time"}
            </button>`:c}
        ${this.pourEndDraft?.batchId===e.id?this.renderPourEndTime(e):c}
        ${t.pour_started?a`<p>
              Pour duration:
              <output
                >${X(q-Date.parse(t.pour_started),t.pour_finished_estimated)}</output
              >
            </p>`:c}
      </section>
      <section>
        <h3>Yield & cure</h3>
        <div class="actions">
          ${e.status==="poured"?a`<form
                class="actions"
                @submit=${n=>{n.preventDefault();let b=new FormData(n.currentTarget);this.event(e,"unmolded",String(b.get("unmoldDate")))}}
              >
                <label
                  >Unmold date<input
                    name="unmoldDate"
                    type="date"
                    max=${N(this.workspace)}
                    value=${N(this.workspace)}
                    required
                /></label>
                <button type="submit" ?disabled=${this.busy}>
                  Mark unmolded
                </button>
              </form>`:c}
          ${["unmolded","cut"].includes(e.status)?a`<button
                ?disabled=${this.busy}
                @click=${()=>{this.yieldOpen=!this.yieldOpen}}
              >
                Record cut yield
              </button>`:c}
          ${e.status==="cut"?a`<form
                class="actions"
                @submit=${n=>{n.preventDefault();let b=new FormData(n.currentTarget);this.event(e,"cure_started",String(b.get("cureStartDate")))}}
              >
                <label
                  >Cure start date<input
                    name="cureStartDate"
                    type="date"
                    min=${e.cut_at||e.yield_actual?.recorded_at||""}
                    max=${N(this.workspace)}
                    value=${N(this.workspace)}
                    required
                /></label>
                <button type="submit" ?disabled=${this.busy}>Start cure</button>
              </form>`:c}
          ${e.status==="curing"?a`<button
                ?disabled=${this.busy}
                @click=${()=>this.event(e,"cure_completed")}
              >
                Confirm cure complete
              </button>`:c}
          <button
            ?disabled=${this.busy}
            @click=${()=>this.run(async()=>this.accept(await this.execute("runCosting",{batchId:e.id})))}
          >
            Calculate costs
          </button>
          <button
            class="primary"
            ?disabled=${this.busy||e.status!=="cured"||!e.costed}
            @click=${()=>this.run(async()=>this.accept(await this.execute("postFinishedGoods",{batchId:e.id})))}
          >
            Post finished goods
          </button>
        </div>
        ${this.yieldOpen&&["unmolded","cut"].includes(e.status)?a`<production-yield-form
              .workspace=${this.workspace}
              .batchId=${e.id}
              .busy=${this.busy}
              @yield-confirmed=${n=>this.run(async()=>{this.accept(await this.execute("recordCutYield",n.detail)),this.yieldOpen=!1})}
              @yield-cancelled=${()=>{this.yieldOpen=!1}}
            ></production-yield-form>`:c}
        ${e.yield_actual?a`<batch-cure-weights
              .workspace=${this.workspace}
              .batchId=${e.id}
              .execute=${this.execute}
            ></batch-cure-weights>`:c}
        ${e.cost_per_bar_by_size?a`<table aria-label="Material cost by bar size">
              <tbody>
                ${Object.entries(e.cost_per_bar_by_size).map(([n,b])=>a`<tr>
                      <td>
                        ${this.workspace?.bar_sizes?.[n]?.display_name||n}
                      </td>
                      <td>${Se(b)} / bar</td>
                    </tr>`)}
              </tbody>
            </table>`:c}
      </section>
      <details ?open=${!!t.mixed}>
        <summary>Batch timeline</summary>
        <table aria-label="Batch timeline">
          <thead>
            <tr>
              <th>Checkpoint</th>
              <th>Time</th>
              <th>From mix</th>
            </tr>
          </thead>
          <tbody>
            ${Oe.map(n=>a`<tr>
                  <td>${n.name}</td>
                  <td>
                    <time datetime=${n.at}
                      >${Ce(n.at,n.estimated)}</time
                    >
                  </td>
                  <td>
                    ${t.mixed?n.estimated?X(Date.parse(n.at)-Date.parse(t.mixed),!0):`${n.at<t.mixed?"-":"+"}${re(Math.abs(Date.parse(n.at)-Date.parse(t.mixed)))}`:"-"}
                  </td>
                </tr>`)}
          </tbody>
        </table>
      </details>
    </section>`}weightValue(e,i){let t=e.weighing?.actual_g[i];return t!==void 0?String(t):this.draftWeights[`${e.id}:${i}`]??String(e.weighing?.suggested_g[i]??0)}invalidWeights(e,i){return e.weighing?i.some(t=>{let s=this.weightValue(e,t),r=Number(s),o=G(e.formulation).includes(t);return s.trim()===""||!Number.isSafeInteger(r)||r<(o?0:1)||e.formulation.materials_required_g[t]<1}):!1}renderWeights(e,i){return e.weighing?a`${i.map(t=>{let s=t in e.weighing.actual_g,r=e.formulation.materials_required_g[t]<1,o=this.busy||e.status!=="prepped"||s||r,d=`${e.id}:${t}`,g=_=>{this.draftWeights=D(v({},this.draftWeights),{[d]:_})},C=this.weightValue(e,t);return a`<div class="weigh-row">
        <label class="weigh-label" for=${d}
          >${f(t)}<small
            >Suggested
            ${r?"<1 g":j(e.weighing.suggested_g[t])}</small
          >${r?a`<small class="error">Finer scale required</small>`:this.invalidWeights(e,[t])?a`<small class="error">Enter valid whole grams</small>`:c}</label
        >
        <div class="amount-stepper">
          <button
            type="button"
            title=${`Decrease ${f(t)} by 1 g`}
            aria-label=${`Decrease ${f(t)} by 1 g`}
            ?disabled=${o||Number(C)<=0}
            @click=${()=>g(String(Math.max(0,(Number(C)||0)-1)))}
          >
            -
          </button>
          <input
            id=${d}
            type="number"
            inputmode="numeric"
            step="1"
            min="0"
            aria-label=${`Actual ${f(t)} (g)`}
            aria-invalid=${this.invalidWeights(e,[t])?"true":"false"}
            .value=${C}
            ?disabled=${o}
            @input=${_=>g(_.target.value)}
          />
          <button
            type="button"
            title=${`Increase ${f(t)} by 1 g`}
            aria-label=${`Increase ${f(t)} by 1 g`}
            ?disabled=${o}
            @click=${()=>g(String((Number(C)||0)+1))}
          >
            +</button
          ><span>g</span>
        </div>
      </div>`})}`:this.materialTable(i.map(t=>[t,e.material_usage_g?.[t]??e.formulation.materials_required_g[t]]))}materialTable(e,i){return a`<table>
      <tbody>
        ${e.map(([t,s])=>a`<tr>
              <td>${f(t)}</td>
              <td>
                ${s===0&&i&&i[t]>0?"<1 g":j(s)}
              </td>
            </tr>`)}
      </tbody>
    </table>`}stepButton(e,i,t,s){let r=e.production?.[i];return a`<div class="checkpoint">
      <button
        class=${i==="mixed"?"primary":""}
        ?disabled=${this.busy||s||!!r}
        aria-describedby=${i==="pour_finished"&&!r&&G(e.formulation).some(o=>!e.production.additives[o])?"pour-blocker":c}
        @click=${()=>this.productionStep(e,i)}
      >
        ${t}</button
      >${r?a`<time datetime=${r}
            >${Ce(r,i==="pour_finished"&&e.production?.pour_finished_estimated)}</time
          >`:c}
    </div>`}renderOmissionCorrection(){let e=this.omissionCorrection;return a`<form
      @submit=${i=>{i.preventDefault();let t=new FormData(i.currentTarget);this.run(async()=>{this.accept(await this.execute("correctAdditiveOmission",D(v({},e),{reason:String(t.get("reason"))}))),this.omissionCorrection=null},`${f(e.material)} corrected to 0 g; ${e.expectedWeightG} g returned to stock.`)}}
    >
      <h3>Correct ${f(e.material)} as omitted</h3>
      <p>${e.expectedWeightG} g will be returned to stock.</p>
      <label
        >Correction reason<input
          type="text"
          name="reason"
          maxlength="500"
          required
      /></label>
      <div class="actions">
        <button type="submit" ?disabled=${this.busy}>
          Confirm omission correction
        </button>
        <button
          type="button"
          ?disabled=${this.busy}
          @click=${()=>{this.omissionCorrection=null}}
        >
          Cancel
        </button>
      </div>
    </form>`}renderTimeCorrection(e){let i=this.timeCorrection,t=e.production?.trace,s=t&&i.at?Math.round((Date.parse(i.at)-Date.parse(t))/1e3):"";return a`<form
      aria-label="Correct additive time"
      @submit=${r=>{r.preventDefault();let o=new FormData(r.currentTarget);this.run(async()=>{this.accept(await this.execute("correctAdditiveTimestamp",{batchId:i.batchId,material:i.material,expectedAt:i.expectedAt,at:i.at,reason:String(o.get("reason")||"")})),this.timeCorrection=null},"Additive time corrected. Recorded weight and inventory are unchanged.")}}
    >
      <h3>Correct ${f(i.material)} time</h3>
      <div class="grid">
        <label
          >Recorded time<input
            name="at"
            type="datetime-local"
            step="1"
            required
            .value=${i.at?Ie(i.at):""}
            @input=${r=>{let o=r.target.value;this.timeCorrection=D(v({},i),{at:o?new Date(o).toISOString():""})}}
        /></label>
        ${t?a`<label
              >Seconds after trace<input
                name="traceOffset"
                type="number"
                step="1"
                .value=${String(s)}
                @input=${r=>{let o=r.target.value,d=Date.parse(t)+Number(o)*1e3;o!==""&&Number.isFinite(d)&&Math.abs(d)<=864e13&&(this.timeCorrection=D(v({},i),{at:new Date(d).toISOString()}))}}
            /></label>`:c}
        <label
          >Correction reason<input
            name="reason"
            type="text"
            required
            maxlength="500"
        /></label>
      </div>
      <div class="actions">
        <button type="submit" ?disabled=${this.busy||!i.at}>
          Save corrected time
        </button>
        <button
          type="button"
          ?disabled=${this.busy}
          @click=${()=>{this.timeCorrection=null}}
        >
          Cancel correction
        </button>
      </div>
    </form>`}renderPourEndTime(e){let i=this.pourEndDraft,t=!!i.expectedAt,s=G(e.formulation).some(r=>!e.production.additives[r]);return a`<form
      aria-label="Pour end time"
      @submit=${r=>{r.preventDefault();let o=new FormData(r.currentTarget);this.run(async()=>{this.accept(t?await this.execute("correctPourEndTimestamp",{batchId:e.id,expectedAt:i.expectedAt,at:i.at,estimated:i.estimated,reason:String(o.get("reason")||"")}):await this.execute("recordProductionStep",{batchId:e.id,step:"pour_finished",at:i.at,estimated:i.estimated})),this.pourEndDraft=null},i.estimated?"Estimated pour end saved.":"Actual pour end time saved.")}}
    >
      <h3>${t?"Correct pour end time":"Actual pour end time"}</h3>
      <div class="grid">
        <label
          >Pour finished at<input
            type="datetime-local"
            name="pourEndAt"
            required
            step="1"
            .value=${i.at?Ie(i.at):""}
            @input=${r=>{let o=r.target.value;this.pourEndDraft&&(this.pourEndDraft=D(v({},this.pourEndDraft),{at:o?new Date(o).toISOString():""}))}}
        /></label>
        ${t?a`<label
              >Correction reason<input
                type="text"
                name="reason"
                required
                maxlength="500"
            /></label>`:c}
      </div>
      <label class="actions"
        ><input
          type="checkbox"
          name="estimated"
          .checked=${i.estimated}
          @change=${r=>{this.pourEndDraft&&(this.pourEndDraft=D(v({},this.pourEndDraft),{estimated:r.target.checked}))}}
        />Estimated time</label
      >
      ${i.at&&e.production?.pour_started?a`<p>
            Pour duration:
            <output
              >${X(Date.parse(i.at)-Date.parse(e.production.pour_started),i.estimated)}</output
            >
          </p>`:c}
      <div class="actions">
        <button type="submit" ?disabled=${this.busy||!i.at||s}>
          ${t?"Save corrected pour end":"Confirm actual pour end"}
        </button>
        <button
          type="button"
          ?disabled=${this.busy}
          @click=${()=>{this.pourEndDraft=null}}
        >
          Cancel pour end entry
        </button>
      </div>
    </form>`}productionStep(e,i,t){this.run(async()=>{let s=ge(e.formulation,i,t);if(e.weighing&&this.invalidWeights(e,s))throw new Error("Enter valid whole-gram actual amounts before confirming.");this.accept(await this.execute("recordProductionStep",v({batchId:e.id,step:i,material:t},e.weighing&&s.length?{actualWeightsG:Object.fromEntries(s.map(r=>[r,Number(this.weightValue(e,r))]))}:{})))})}event(e,i,t){this.run(async()=>this.accept(await this.execute("recordBatchEvent",v({batchId:e.id,eventType:i},t?{at:t}:{}))))}accept(e){this.workspace=e.workspace,this.dispatchEvent(new CustomEvent("workspace-updated",{detail:e,bubbles:!0,composed:!0}))}async run(e,i="Saved locally."){if(!(this.busy||!this.execute)){this.busy=!0,this.message="",this.error=!1;try{await e(),this.message=i}catch(t){this.message=t instanceof Error?t.message:String(t),this.error=!0}finally{this.busy=!1}}}};m.styles=pe`
    :host {
      display: block;
      color: #21352e;
      font: inherit;
    }
    * {
      box-sizing: border-box;
      letter-spacing: 0;
    }
    h2 {
      font-size: 1.25rem;
      margin: 0;
    }
    h3 {
      font-size: 1rem;
      margin: 0 0 0.75rem;
    }
    header,
    .actions,
    .checkpoint {
      display: flex;
      gap: 0.75rem;
      align-items: center;
      flex-wrap: wrap;
    }
    header {
      justify-content: space-between;
      margin: 1.5rem 0 1rem;
    }
    .grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 1.25rem;
    }
    section,
    .molds {
      border-top: 1px solid #c7d1cb;
      padding: 1rem 0;
    }
    .stream {
      border-left: 3px solid #2f6a59;
      padding-left: 1rem;
      min-width: 0;
    }
    .stream:nth-child(2) {
      border-color: #a2603e;
    }
    .mold {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      gap: 0.75rem;
      margin: 0.75rem 0;
      align-items: end;
    }
    label {
      display: grid;
      gap: 0.35rem;
      font-size: 0.9rem;
      min-width: 0;
    }
    input,
    select,
    button {
      font: inherit;
      min-width: 0;
      max-width: 100%;
      border: 1px solid #a9bab0;
      border-radius: 4px;
      padding: 0.6rem 0.75rem;
      background: white;
      color: inherit;
    }
    input,
    select {
      width: 100%;
    }
    button {
      cursor: pointer;
      min-height: 44px;
    }
    button.primary {
      background: #245b4d;
      color: white;
      border-color: #245b4d;
    }
    button:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    table {
      border-collapse: collapse;
      width: 100%;
      table-layout: fixed;
    }
    th,
    td {
      padding: 0.5rem 0.25rem;
      text-align: left;
      border-bottom: 1px solid #e1e7e3;
      overflow-wrap: anywhere;
      font-size: 0.9rem;
    }
    td:last-child {
      text-align: right;
      font-variant-numeric: tabular-nums;
    }
    .timer {
      font-size: 2rem;
      font-variant-numeric: tabular-nums;
      margin: 0.5rem 0;
    }
    .muted,
    small {
      color: #52665b;
    }
    .error {
      color: #983c29;
    }
    .ok {
      color: #245b4d;
    }
    .message:empty {
      display: none;
    }
    .message {
      padding: 0.75rem 0;
    }
    output {
      font-variant-numeric: tabular-nums;
    }
    .batch-id {
      overflow-wrap: anywhere;
      font-size: 0.8rem;
    }
    .summary {
      display: flex;
      gap: 1.5rem;
      flex-wrap: wrap;
      margin: 0.75rem 0;
    }
    .summary div {
      display: grid;
      gap: 0.25rem;
    }
    .summary strong {
      font-size: 1.1rem;
    }
    .checklist {
      display: grid;
      gap: 0.75rem;
    }
    .checklist label {
      display: flex;
      align-items: center;
    }
    .checklist input {
      width: 22px;
      height: 22px;
      flex: 0 0 22px;
    }
    .weigh-row {
      display: grid;
      grid-template-columns: minmax(0, 1fr) 220px;
      gap: 0.75rem;
      align-items: center;
      padding: 0.6rem 0;
      border-bottom: 1px solid #e1e7e3;
    }
    .weigh-label {
      overflow-wrap: anywhere;
    }
    .amount-stepper {
      display: grid;
      grid-template-columns: 44px minmax(50px, 1fr) 44px 1rem;
      align-items: center;
      gap: 4px;
      width: 220px;
      max-width: 100%;
    }
    .amount-stepper input {
      width: 100%;
      text-align: right;
      min-height: 44px;
      padding: 0.5rem;
      appearance: textfield;
    }
    .checklist label.weigh-label {
      display: grid;
    }
    .amount-stepper input::-webkit-inner-spin-button,
    .amount-stepper input::-webkit-outer-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
    .amount-stepper button {
      padding: 0;
      font-size: 1.25rem;
    }
    @media (max-width: 750px) {
      .weigh-row {
        grid-template-columns: 1fr;
        gap: 0.3rem;
      }
    }
    details > summary {
      cursor: pointer;
      padding: 0.75rem 0;
    }
    @media (max-width: 650px) {
      .grid {
        grid-template-columns: 1fr;
      }
      .mold {
        grid-template-columns: 1fr;
        padding-bottom: 1rem;
        border-bottom: 1px solid #e1e7e3;
      }
      .actions button {
        flex: 1 1 150px;
      }
    }
  `,p([O({attribute:!1})],m.prototype,"initialRecipeId",2),p([O({attribute:!1})],m.prototype,"workspace",2),p([O({attribute:!1})],m.prototype,"execute",2),p([h()],m.prototype,"selectedId",2),p([h()],m.prototype,"planning",2),p([h()],m.prototype,"busy",2),p([h()],m.prototype,"message",2),p([h()],m.prototype,"error",2),p([h()],m.prototype,"now",2),p([h()],m.prototype,"draftWeights",2),p([h()],m.prototype,"yieldOpen",2),p([h()],m.prototype,"pourEndDraft",2),p([h()],m.prototype,"omissionMaterial",2),p([h()],m.prototype,"omissionCorrection",2),p([h()],m.prototype,"timeCorrection",2),p([h()],m.prototype,"preview",2),p([h()],m.prototype,"replacePlans",2),p([h()],m.prototype,"recipe",2),p([h()],m.prototype,"fragrance",2),p([h()],m.prototype,"clayReplacement",2),p([h()],m.prototype,"audit",2),p([h()],m.prototype,"auditError",2),p([h()],m.prototype,"checking",2),p([h()],m.prototype,"moldRows",2),m=p([J("production-workbench")],m)});function Me(u,l){let i=!l?.manualCleanup?l?.injector?.get(ee)??A(ee):null,t=ze(l?.equal),s;l?.requireSync?s=P({kind:0},{equal:t}):s=P({kind:1,value:l?.initialValue},{equal:t});let r,o=u.subscribe({next:d=>s.set({kind:1,value:d}),error:d=>{s.set({kind:2,error:d}),r?.()},complete:()=>{r?.()}});if(l?.requireSync&&s().kind===0)throw new Z(601,!1);return r=i?.onDestroy(o.unsubscribe.bind(o)),W(()=>{let d=s();switch(d.kind){case 1:return d.value;case 2:throw d.error;case 0:throw new Z(601,!1)}},{equal:l?.equal})}function ze(u=Object.is){return(l,e)=>l.kind===1&&e.kind===1&&u(l.value,e.value)}var Te=U(()=>{"use strict";Fe();Le();});function Ae(u,l){if(u&1&&(w(0,"span"),E(1),$()),u&2){let e,i=l,t=x().$implicit,s=x();k(),de("",((e=s.workspace.workspace())==null||e.bar_sizes==null||e.bar_sizes[i]==null?null:e.bar_sizes[i].display_name)||i," / ",t.volume_in3," in3 / ",t.bars_expected," expected bars")}}function Pe(u,l){if(u&1){let e=H();w(0,"button",14),R("click",function(){M(e);let t=x().$implicit,s=x();return T(s.productionAction("next",t.id))}),E(1),$()}if(u&2){let e=x().$implicit;L("disabled",!!e.reconciliation_required),k(),oe(" ",l," ")}}function Be(u,l){if(u&1){let e=H();w(0,"batch-cure-weights",15),R("workspace-updated",function(t){M(e);let s=x(2);return T(s.acceptProductionState(t))}),$()}if(u&2){let e=x().$implicit,i=x();L("workspace",i.workspace.workspace())("batchId",e.id)("execute",i.workspace.execute)}}function Ve(u,l){if(u&1){let e=H();w(0,"article",7)(1,"div")(2,"strong"),E(3),$(),w(4,"span"),E(5),$(),B(6,Ae,2,3,"span"),$(),w(7,"span",5),E(8),$(),w(9,"button",10),R("click",function(){let t=M(e).$implicit,s=x();return T(s.productionAction("cost",t.id))}),E(10," Cost "),$(),w(11,"button",11),R("click",function(){let t=M(e).$implicit,s=x();return T(s.productionAction("cut",t.id))}),E(12," Cut "),$(),w(13,"button",11),R("click",function(){let t=M(e).$implicit,s=x();return T(s.productionAction("post",t.id))}),E(14," Post "),$(),B(15,Pe,2,2,"button",12),B(16,Be,1,3,"batch-cure-weights",13),$()}if(u&2){let e,i,t=l.$implicit,s=x();k(3),Y(t.id),k(2),Y(t.product_recipe_id||t.base_recipe_id||t.recipe_id||""),k(),V((e=t.formulation==null?null:t.formulation.bar_size)?6:-1,e),k(2),Y(t.status),k(3),L("disabled",t.status!=="unmolded"&&t.status!=="cut"),k(2),L("disabled",t.status!=="cured"||!t.costed||!!t.reconciliation_required),k(2),V((i=s.nextLabel(t.status))?15:-1,i),k(),V(t.yield_actual?16:-1)}}function He(u,l){u&1&&(w(0,"div",8),E(1,"No production batches yet."),$())}function Ge(u,l){if(u&1){let e=H();w(0,"production-yield-form",16),R("yield-confirmed",function(t){M(e);let s=x();return T(s.recordYield(t))})("yield-cancelled",function(){M(e);let t=x();return T(t.editingYield.set(null))}),$()}if(u&2){let e=x();L("workspace",e.workspace.workspace())("batchId",l)}}var qe,Re,Ue=U(()=>{le();ie();je();xe();De();Ne();Te();le();qe=(u,l)=>l.id;Re=class u{constructor(){this.queryParams=Me(A(ce).queryParamMap);this.workspace=A(ue);this.editingYield=P(null);this.batches=W(()=>[...this.workspace.workspace()?.batches||[]].filter(l=>!l.production).reverse())}acceptProductionState(l){this.workspace.acceptState(l.detail)}nextLabel(l){return ve(l)}productionAction(l,e){if(l==="cut"||l==="next"&&this.workspace.workspace()?.batches?.find(i=>i.id===e)?.status==="unmolded"){this.editingYield.set(e);return}this.workspace.handleProductionAction(l,e)}async recordYield(l){try{await this.workspace.recordYield(l.detail),this.editingYield.set(null)}catch{}}static{this.\u0275fac=function(e){return new(e||u)}}static{this.\u0275cmp=ne({type:u,selectors:[["rms-flow-page"]],decls:13,vars:5,consts:[["aria-labelledby","flow-heading"],[3,"workspace-updated","workspace","execute","initialRecipeId"],[1,"panel","full-width"],[1,"panel-heading"],["id","flow-heading"],[1,"badge"],[1,"production-list"],[1,"production-row"],[1,"result-empty"],[3,"workspace","batchId"],[1,"secondary",3,"click"],[1,"secondary",3,"click","disabled"],[1,"primary",3,"disabled"],[3,"workspace","batchId","execute"],[1,"primary",3,"click","disabled"],[3,"workspace-updated","workspace","batchId","execute"],[3,"yield-confirmed","yield-cancelled","workspace","batchId"]],template:function(e,i){if(e&1&&(w(0,"section",0)(1,"production-workbench",1),R("workspace-updated",function(s){return i.acceptProductionState(s)}),$(),w(2,"section",2)(3,"div",3)(4,"h2",4),E(5,"Single-Mold Batches"),$(),w(6,"span",5),E(7,"Lifecycle"),$()(),w(8,"div",6),ae(9,Ve,17,8,"article",7,qe,!1,He,2,0,"div",8),$(),B(12,Ge,1,2,"production-yield-form",9),$()()),e&2){let t,s;k(),L("workspace",i.workspace.workspace())("execute",i.workspace.execute)("initialRecipeId",((t=i.queryParams())==null?null:t.get("recipe"))||""),k(8),se(i.batches()),k(3),V((s=i.editingYield())?12:-1,s)}},encapsulation:2})}}});Ue();export{Re as FlowPage};
