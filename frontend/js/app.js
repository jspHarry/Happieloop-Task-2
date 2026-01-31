
const API = "http://localhost:5000/api/tasks";

let editingId = null;

async function loadTasks(){
  const res = await fetch(API);
  const tasks = await res.json();
  const container = document.getElementById("tasks");
  container.innerHTML = "";
  tasks.forEach(t => {
    const statusClass = t.status.toLowerCase().replace(/\s+/g,'-');
    const safeTitle = escapeHtml(t.title);
    const safeDesc = escapeHtml(t.description || '');
    const el = document.createElement('div');
    el.className = 'task';
    el.setAttribute('data-status', statusClass);
    el.innerHTML = `
      <div style="display:flex;justify-content:space-between;align-items:start;">
        <div>
          <h3>${safeTitle}</h3>
          <div style="margin-top:8px;"><span class="badge">${t.status}</span></div>
        </div>
        <div>
          <small style="color:var(--muted)">${new Date(t.createdAt).toLocaleString()}</small>
        </div>
      </div>
      <p>${safeDesc}</p>
      <div class="task-actions">
        <div class="left">
          <button class="icon-btn edit" onclick="startEdit('${t._id}')">Edit</button>
          <button class="icon-btn" onclick="changeStatus('${t._id}','Pending')">Pending</button>
          <button class="icon-btn" onclick="changeStatus('${t._id}','In Progress')">In Progress</button>
          <button class="icon-btn" onclick="changeStatus('${t._id}','Completed')">Completed</button>
        </div>
        <div>
          <button class="icon-btn delete" onclick="deleteTask('${t._id}')">Delete</button>
        </div>
      </div>
    `;
    container.appendChild(el);
  });
}

function escapeHtml(text){
  return text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

async function createTask(){
  const titleEl = document.getElementById('title');
  const descEl = document.getElementById('desc');
  const statusEl = document.getElementById('status');
  const payload = { title: titleEl.value, description: descEl.value, status: statusEl.value };
  if(!payload.title.trim()){ alert('Please enter a title'); return; }
  if(editingId){
    await fetch(API + '/' + editingId, {
      method: 'PUT',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(payload)
    });
    editingId = null;
    document.getElementById('btnCreate').textContent = 'Create Task';
  } else {
    await fetch(API, {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify(payload)
    });
  }
  titleEl.value=''; descEl.value=''; statusEl.value='Pending';
  loadTasks();
}

function startEdit(id){
  fetch(API + '/' + id).then(r=>r.json()).then(task=>{
    document.getElementById('title').value = task.title || '';
    document.getElementById('desc').value = task.description || '';
    document.getElementById('status').value = task.status || 'Pending';
    editingId = id;
    document.getElementById('btnCreate').textContent = 'Update Task';
    window.scrollTo({top:0,behavior:'smooth'});
  });
}

async function deleteTask(id){
  if(!confirm('Delete this task?')) return;
  await fetch(API + '/' + id, { method: 'DELETE' });
  loadTasks();
}

async function changeStatus(id, status){
  await fetch(API + '/' + id, {
    method: 'PUT',
    headers: {'Content-Type':'application/json'},
    body: JSON.stringify({ status })
  });
  loadTasks();
}

// initial load
loadTasks();
