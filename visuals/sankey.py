import pandas as pd
from collections import Counter
import plotly.graph_objects as go
import plotly.colors as pc

# Load your CSV file
df = pd.read_csv("Employee Department Change (Cleaned).csv")

# Fix column names
df.columns = ["Employee", "Department", "Step 1", "Step 2", "Step 3", "Step 4", "Step 5"]
# Replace deprecated applymap with map
for col in df.columns:
    df[col] = df[col].map(lambda x: x.strip() if isinstance(x, str) else x)

# Create unified career path column
df["Career Path"] = df[["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"]].values.tolist()
df["Career Path"] = df["Career Path"].apply(lambda path: [step for step in path if pd.notna(step)])

# Extract transitions
transitions = []
for path in df["Career Path"]:
    for i in range(len(path) - 1):
        transitions.append((path[i], path[i+1]))

# Count transitions
transition_counts = Counter(transitions)
source_labels = [src for src, _ in transition_counts.keys()]
target_labels = [tgt for _, tgt in transition_counts.keys()]
values = list(transition_counts.values())

# Map labels to indices
all_labels = list(set(source_labels + target_labels))
label_index = {label: idx for idx, label in enumerate(all_labels)}
source_idx = [label_index[src] for src in source_labels]
target_idx = [label_index[tgt] for tgt in target_labels]

# Create a beautiful color palette
colors = pc.qualitative.Set3 + pc.qualitative.Pastel1 + pc.qualitative.Set1
node_colors = [colors[i % len(colors)] for i in range(len(all_labels))]

# Create gradient colors for links based on values
max_value = max(values) if values else 1
link_colors = []
for value in values:
    # Create a gradient from light to dark based on value
    intensity = value / max_value
    link_colors.append(f'rgba(70, 130, 180, {0.3 + 0.7 * intensity})')

# Create Sankey diagram with enhanced styling
fig = go.Figure(data=[go.Sankey(
    node=dict(
        pad=25,
        thickness=25,
        line=dict(color="rgba(0,0,0,0.8)", width=1),
        label=all_labels,
        color=node_colors
    ),
    link=dict(
        source=source_idx,
        target=target_idx,
        value=values,
        color=link_colors,
        line=dict(color="rgba(0,0,0,0.1)", width=0.5)
    )
)])

# Enhanced layout with better styling
fig.update_layout(
    title=dict(
        text="Employee Career Path Flow",
        font=dict(size=32, color="rgba(0,0,0,0.8)"),
        x=0.5,
        y=0.95
    ),
    font=dict(size=16, color="rgba(0,0,0,0.7)"),
    plot_bgcolor="rgba(248,248,248,1)",
    paper_bgcolor="rgba(248,248,248,1)",
    width=1920,
    height=1080,
    margin=dict(t=100, b=60, l=60, r=60)
)

fig.show()
